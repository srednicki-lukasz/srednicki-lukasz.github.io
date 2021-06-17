import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationService } from '../core/services/navigation.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	@ViewChild('navigation') public navigation: MatSidenav;

	constructor(
        private navigationService: NavigationService
    ) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.navigationService.setNavigation(this.navigation);
	}
}
