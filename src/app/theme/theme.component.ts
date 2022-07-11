import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../_services/script-loader.service';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
	selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
	templateUrl: "./theme.component.html",
	encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {


	constructor(private _script: ScriptLoaderService, private _router: Router) {

	}
	ngOnInit() {
		this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
			.then(result => {
				Helpers.setLoading(false);
				// optional js to be loaded once
				this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
			});
	}

}