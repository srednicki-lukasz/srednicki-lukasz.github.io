import { importProvidersFrom } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let spectator: Spectator<SidebarComponent>;

  const createComponent = createComponentFactory({
    component: SidebarComponent,
    providers: [importProvidersFrom(RouterTestingModule)],
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    spectator.detectChanges();
    expect(spectator.fixture).toMatchSnapshot();
  });
});
