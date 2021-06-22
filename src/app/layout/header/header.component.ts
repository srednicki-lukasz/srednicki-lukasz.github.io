import { Component, OnInit } from '@angular/core';

import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor( private navigationService: NavigationService ) {}

	ngOnInit(): void {}

	/**
	 * Open navigation.
	 * @memberof HeaderComponent
	 */
	openNavigation() {
		this.navigationService.open();
	}
}
