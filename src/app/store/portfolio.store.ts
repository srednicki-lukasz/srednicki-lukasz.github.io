import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Repository } from '../models/portfolio.models';
import { PortfolioHttpService } from './portfolio-http.service';

const configRepositoryId = 347375901;
const portfolioRepositoryId = 978832136;

type PortfolioState = {
  isLoading: boolean;
  repositories: Repository[];
};

const initialState: PortfolioState = {
  isLoading: false,
  repositories: [],
};

export const PortfolioStore = signalStore(
  withState(initialState),
  withComputed(({ repositories }) => ({
    portfolioRepository: computed((): Repository => {
      return repositories().find(({ id }) => id === portfolioRepositoryId)!;
    }),
    repositoriesWithoutPortfolioRepository: computed((): Repository[] => {
      return repositories().filter(({ id }) => id !== configRepositoryId && id !== portfolioRepositoryId);
    }),
  })),
  withMethods((store, portfolioHttpService = inject(PortfolioHttpService)) => ({
    async fetchRepositories(): Promise<void> {
      if (store.repositories().length) return;
      patchState(store, { isLoading: true });

      const repositories = await portfolioHttpService.fetchRepositories();
      patchState(store, { isLoading: false, repositories });
    },
  }))
);
