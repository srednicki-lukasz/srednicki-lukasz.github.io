import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from '../animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routerAnimation],
  imports: [RouterOutlet, SidebarComponent],
})
export class AppComponent {
  public isPortrait = signal(window.matchMedia('(orientation: portrait)').matches);

  constructor() {
    window
      .matchMedia('(orientation: portrait)')
      .addEventListener('change', ({ matches: portrait }) => this.isPortrait.set(portrait));
  }

  public prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
