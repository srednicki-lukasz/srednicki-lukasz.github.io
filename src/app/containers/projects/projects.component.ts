import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { Repository } from '../../models/portfolio.models';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  private readonly store = inject(PortfolioStore);

  isLoading = computed(this.computeIsLoading.bind(this));
  portfolioRepository = computed(this.computePortfolioRepository.bind(this));
  repositoriesWithoutPortfolioRepository = computed(this.computeRepositoriesWithoutPortfolioRepository.bind(this));

  public ngOnInit(): void {
    this.store.fetchRepositories();
  }

  private computeIsLoading(store = this.store): boolean {
    return store.isLoading();
  }

  private computePortfolioRepository(store = this.store): Repository {
    return store.portfolioRepository();
  }

  private computeRepositoriesWithoutPortfolioRepository(store = this.store): Repository[] {
    return store.repositoriesWithoutPortfolioRepository();
  }
}
