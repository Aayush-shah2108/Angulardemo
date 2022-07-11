import { DefaultComponent } from './../pages/default/default.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderNavComponent,
		AsideNavComponent,
		FooterComponent,
		DefaultComponent,
	],
	exports: [
		LayoutComponent,
		HeaderNavComponent,
		AsideNavComponent,
		FooterComponent,
		DefaultComponent
	],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class LayoutModule {
}