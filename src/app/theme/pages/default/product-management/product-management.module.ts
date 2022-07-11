import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { CKEditorModule } from 'ngx-ckeditor';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ProductManagementComponent
            }, {
                "path": "add",
                "component": AddEditProductComponent
            },
            {
                "path": "edit/:id",
                "component": AddEditProductComponent
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
        ProductManagementComponent,
        AddEditProductComponent
    ],
    providers: []
})
export class ProductManagementModule {

}