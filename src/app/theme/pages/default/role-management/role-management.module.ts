import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleManagementComponent } from './role-management.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { AddEditRoleComponent } from './add-edit-role/add-edit-role.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": RoleManagementComponent
            }, {
                "path": "add",
                "component": AddEditRoleComponent
            },
            {
                "path": "edit/:id",
                "component": AddEditRoleComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, ReactiveFormsModule, CKEditorModule
    ], exports: [
        RouterModule
    ], declarations: [
        RoleManagementComponent,
        AddEditRoleComponent
    ],
    providers: []
})
export class RoleManagementModule {

}