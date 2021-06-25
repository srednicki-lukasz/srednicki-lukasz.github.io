import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsComponent } from './page/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

import { CertificatesComponent } from './components/certificates/certificates.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
	declarations: [
        ProjectsComponent,
        CertificatesComponent,
        RepositoriesComponent
    ],
	imports: [
        CommonModule,
        HttpClientModule,
        ProjectsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTabsModule
    ],
})
export class ProjectsModule {}
