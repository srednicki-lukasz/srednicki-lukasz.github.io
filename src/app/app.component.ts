import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  public prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
