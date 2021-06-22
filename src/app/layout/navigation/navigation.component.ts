import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
	constructor( private navigationService: NavigationService ) {}

	ngOnInit(): void {}

	/**
	 * Open navigation.
	 * @memberof NavigationComponent
	 */
	openNavigation() {
		this.navigationService.open();
	}

    /**
     * Close navigation.
     * @memberof NavigationComponent
     */
    closeNavigation() {
        this.navigationService.close();
    }

    /**
     * Close navigation with timeout.
     * @memberof NavigationComponent
     */
    closeNavigationWithTimeout() {
        setTimeout(() => this.navigationService.close(), 500);
    }
}
