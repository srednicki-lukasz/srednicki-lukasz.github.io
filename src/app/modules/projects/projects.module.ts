import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './page/projects.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProjectsComponent],
	imports: [
        CommonModule,
        HttpClientModule,
        ProjectsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule
    ],
})
export class ProjectsModule {}
