
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/_guards/login.guard';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		"canActivate": [AuthGuard],
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	}

];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }