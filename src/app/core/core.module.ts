import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationService } from './services/navigation.service';
import { ProjectsService } from './services/projects.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
        NavigationService,
        ProjectsService
    ],
})
export class CoreModule {}
