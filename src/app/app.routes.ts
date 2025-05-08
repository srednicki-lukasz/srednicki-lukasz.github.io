import { Routes } from '@angular/router';
import { PortfolioHttpService } from './store/portfolio-http.service';
import { PortfolioStore } from './store/portfolio.store';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { animation: 'home' },
    loadComponent: () => import('./containers/home/home.component').then(m => m.HomeComponent),
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
