import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Repository, RepositoryLanguages } from '../models/portfolio.models';
import { PortfolioHttpService } from './portfolio-http.service';

export const configRepositoryId = 347375901;
export const portfolioRepositoryId = 978832136;

type PortfolioState = {
  isLoading: boolean;
  repositories: (Repository & { languages: RepositoryLanguages })[];
};

const initialState: PortfolioState = {
  isLoading: false,
  repositories: [],
};

export const PortfolioStore = signalStore(
  withState(initialState),
  withComputed(({ repositories }) => ({
    computedRepositories: computed(() => [
      ...repositories().filter(({ id }) => id === portfolioRepositoryId),
      ...repositories().filter(({ id }) => id !== portfolioRepositoryId),
    ]),
  })),
  withMethods((store, portfolioHttpService = inject(PortfolioHttpService)) => ({
    async fetchRepositories(): Promise<void> {
      if (store.repositories().length) return;
      patchState(store, { isLoading: true });

      const repositories = await portfolioHttpService.fetchRepositories();
      const repositoriesWithoutConfigRepository = repositories.filter(({ id }) => id !== configRepositoryId);

      const repositoriesWithLanguages = await Promise.all(
        repositoriesWithoutConfigRepository.map(async repository => {
          const languages = await portfolioHttpService.fetchRepositoryLanguages(repository.name);
          return { ...repository, languages };
        })
      );

      patchState(store, { isLoading: false, repositories: repositoriesWithLanguages });
    },
  }))
);
