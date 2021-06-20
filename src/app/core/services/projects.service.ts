import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    /**
     * GitHub Repositories.
     * @memberof ProjectsService
     */
    private repositories: string = 'https://api.github.com/users/srednicki-lukasz/repos?sort=updated';

    constructor(private http: HttpClient) { }

    /**
     * Get repositories.
     * @memberof ProjectsService
     */
    getGitHubRepositories() {
        return this.http.get<any[]>(this.repositories);
    }
}
