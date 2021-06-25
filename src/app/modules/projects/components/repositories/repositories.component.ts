import { Component, OnInit, ViewChild } from '@angular/core';

import { ProjectsService } from 'src/app/core/services/projects.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Repositories array.
     * @memberof RepositoriesComponent
     */
    public repositories: any[];

    /**
     * Repositories data source.
     * @memberof RepositoriesComponent
     */
    public dataSource: any;

    /**
     * Table page size options.
     * @memberof RepositoriesComponent
     */
    public pageSizeOptions = [5, 10, 20];

    /**
     * Table columns.
     * @memberof RepositoriesComponent
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

                this.dataSource = new MatTableDataSource(this.repositories);
                this.dataSource.paginator = this.paginator;
            });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
}
