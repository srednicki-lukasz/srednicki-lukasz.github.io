import { importProvidersFrom } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;

  const createComponent = createComponentFactory({
    component: HomeComponent,
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
