import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'home',
				loadChildren: () =>
					import('./modules/home/home.module').then(
                        (m) => m.HomeModule
                    ),
			},
			{
				path: 'projects',
				loadChildren: () =>
					import('./modules/projects/projects.module').then(
						(m) => m.ProjectsModule
					),
			},
			{
				path: 'contact',
				loadChildren: () =>
					import('./modules/contact/contact.module').then(
						(m) => m.ContactModule
					),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
