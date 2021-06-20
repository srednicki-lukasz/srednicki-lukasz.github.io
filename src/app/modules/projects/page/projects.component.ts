import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Repositories array.
     * @memberof ProjectsComponent
     */
    public repositories: any[];

    /**
     * Table data source.
     * @memberof ProjectsComponent
     */
    public dataSource: any;

	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
        const excludedRepositories = [347375901, 370015322];

        this.projectsService.getGitHubRepositories()
            .subscribe(response => {
                this.repositories = response;
                this.repositories = this.repositories
                    .filter(repository => !excludedRepositories.includes(repository.id));
                this.dataSource = new MatTableDataSource(this.repositories);
                this.dataSource.paginator = this.paginator;
            });
    }
}
