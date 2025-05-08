import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { authorInfo } from '../../author-info';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarComponent {
  readonly socials = authorInfo.socials;

  copyrightNotice = computed(this.computeCopyrightNotice);

  private computeCopyrightNotice(): string {
    return `&copy; ${new Date().getFullYear()} Łukasz Średnicki<br>All rights reserved`;
  }
}
