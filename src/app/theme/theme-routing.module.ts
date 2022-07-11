import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";


const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [

            {
                "path": "product-management",
                "loadChildren": "./pages/default/product-management/product-management.module#ProductManagementModule"
            },
            {
                "path": "role-management",
                "loadChildren": "./pages/default/role-management/role-management.module#RoleManagementModule"
            },

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }