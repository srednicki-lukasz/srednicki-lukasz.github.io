import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Repository } from '../../models/portfolio.models';
import { PortfolioHttpService } from '../../store/portfolio-http.service';
import { PortfolioStore } from '../../store/portfolio.store';
import { createTestRepository } from '../../test/portfolio.test-data';
import { ProjectsComponent } from './projects.component';

const testRepositories = [createTestRepository(), createTestRepository(1)];

describe('ProjectsComponent', () => {
  let spectator: Spectator<ProjectsComponent>;

  let portfolioHttpService: jest.Mocked<PortfolioHttpService>;
  let resolveFetchRepositories: (repositories: Repository[]) => void;

  const createComponent = createComponentFactory({
    component: ProjectsComponent,
    providers: [
      PortfolioStore,
      PortfolioHttpService,
      provideHttpClient(),
      importProvidersFrom(RouterTestingModule),
      {
        provide: PortfolioHttpService,
        useValue: {
          fetchRepositories: jest
            .fn()
            .mockImplementation(() => new Promise<Repository[]>(resolve => (resolveFetchRepositories = resolve))),
        },
      },
    ],
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    portfolioHttpService = spectator.inject(PortfolioHttpService) as any;
  });

  it('should fetch repositories and match snapshot', async () => {
    expect(spectator.component.isLoading()).toBeFalsy();

    spectator.detectChanges();

    expect(portfolioHttpService.fetchRepositories).toHaveBeenCalled();
    expect(spectator.component.isLoading()).toBeTruthy();

    spectator.detectChanges();

    resolveFetchRepositories(testRepositories);
    await Promise.resolve();

    expect(spectator.component.isLoading()).toBeFalsy();
    expect(spectator.component.portfolioRepository()).toEqual(testRepositories[0]);
    expect(spectator.component.repositoriesWithoutPortfolioRepository()).toEqual([testRepositories[1]]);

    spectator.detectChanges();

    expect(spectator.fixture).toMatchSnapshot();
  });
});
