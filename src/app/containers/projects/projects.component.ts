import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { Repository } from '../../models/portfolio.models';
import { portfolioRepositoryId, PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  private readonly store = inject(PortfolioStore);

  readonly portfolioRepositoryId = portfolioRepositoryId;

  isLoading = computed(this.computeIsLoading.bind(this));
  repositories = computed(this.computeRepositories.bind(this));

  public ngOnInit(): void {
    this.store.fetchRepositories();
  }

  private computeIsLoading(store = this.store): boolean {
    return store.isLoading();
  }

  private computeRepositories(store = this.store): (Repository & { languages: string })[] {
    return store.computedRepositories().map(computedRepository => ({
      ...computedRepository,
      languages: Object.keys(computedRepository.languages).join(', '),
    }));
  }
}
