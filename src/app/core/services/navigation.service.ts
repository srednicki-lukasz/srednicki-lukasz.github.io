import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
	providedIn: 'root',
})
export class NavigationService {
    
	/**
	 * Navigation.
	 * @memberof NavigationService
	 */
	private navigation: MatSidenav;

	constructor() {}

	/**
	 * Setter for navigation.
	 * @param {MatSidenav} navigation
	 * @memberof NavigationService
	 */
	setNavigation(navigation: MatSidenav) {
		this.navigation = navigation;
	}

	/**
	 * Open navigation.
	 * @memberof NavigationService
	 */
	open() {
		return this.navigation.open();
	}

	/**
	 * Close navigation.
	 * @memberof NavigationService
	 */
	close() {
		return this.navigation.close();
	}

    /**
     * Toggle navigation.
     * @memberof navigationService
     */
    toggle() {
		return this.navigation.toggle();
	}
}
