import { Routes } from '@angular/router';
import { PortfolioHttpService } from './store/portfolio-http.service';
import { PortfolioStore } from './store/portfolio.store';
import { HomeComponent } from './containers/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { animation: 'home' },
    component: HomeComponent,
  },
  {
    path: 'projects',
    data: { animation: 'projects' },
    providers: [PortfolioStore, PortfolioHttpService],
    loadComponent: () => import('./containers/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
