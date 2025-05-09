import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Repository, RepositoryLanguages } from '../models/portfolio.models';

@Injectable()
export class PortfolioHttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly origin = 'https://api.github.com';

  public fetchRepositories(): Promise<Repository[]> {
    return firstValueFrom(this.httpClient.get<Repository[]>(`${this.origin}/users/srednicki-lukasz/repos`));
  }

  public fetchRepositoryLanguages(repository: string): Promise<RepositoryLanguages> {
    return firstValueFrom(this.httpClient.get<any>(`${this.origin}/repos/srednicki-lukasz/${repository}/languages`));
  }
}
