import { Component, OnInit, ViewChild } from '@angular/core';

import { ProjectsService } from 'src/app/core/services/projects.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
    public tableDataSource: any;

    /**
     * Table page size options.
     * @memberof ProjectsComponent
     */
    public pageSizeOptions = [5, 10, 20];

    /**
     * Table columns.
     * @memberof ProjectsComponent
     */
    public columns = ['index', 'name', 'link'];

	constructor( private projectsService: ProjectsService ) {}

	ngOnInit(): void {
        const excludedRepositories = [347375901, 370015322];

        this.projectsService.getGitHubRepositories()
            .subscribe(response => {
                this.repositories = response;
                this.repositories = this.repositories
                    .filter(repository => !excludedRepositories.includes(repository.id));

                this.tableDataSource = new MatTableDataSource(this.repositories);
                this.tableDataSource.paginator = this.paginator;
            });
    }
}
