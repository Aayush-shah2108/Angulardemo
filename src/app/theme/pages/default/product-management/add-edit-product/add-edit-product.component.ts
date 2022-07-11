import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductManagementService } from '../product-management.service';

declare const $: any;

@Component({
    selector: "app-add-edit-product",
    templateUrl: "./add-edit-product.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AddEditProductComponent implements OnInit {
    productForm: FormGroup;
    formSubmitted: boolean;
    entities: string[];
    constructor(
        private formBuilder: FormBuilder, private activeRoute: ActivatedRoute,
        private toastr: ToastrService,
        public spinner: NgxSpinnerService, private router: Router,
        private apiFactory: ProductManagementService) {

    }

    ngOnInit() {
        this.spinner.hide()
        this.buildProductForm()

        if (this.activeRoute.snapshot.params['id']) {
            this.apiFactory.getProductDetails(this.activeRoute.snapshot.params['id']).subscribe((result: any) => {
                // this.spinner.hide()
                if (!result.success) {
                    let data = result
                    if (data && data.code && data.code == 200 && data.code) {
                        this.productForm.patchValue(data.data)
                    }
                }
                else {
                    this.toastr.success(result.message)
                }
            })
        }
    }


    /**
     * builds user form
     */
    buildProductForm() {
        this.productForm = this.formBuilder.group({
            _id: [],
            productId: ['', [Validators.required]],
            productName: ['', [Validators.required]],
        })
    }

    /**
     * add or update product details
     */
    saveProduct() {
        this.formSubmitted = true;
        if (this.productForm.invalid) {
            this.toastr.error('Please provide valid details')
            return false
        }

        var fd = new FormData();
        fd.append('productId', this.productForm.value.productId);
        fd.append('productName', this.productForm.value.productName);

        let result;

        if (this.activeRoute.snapshot.paramMap.get('id')) {
            result = this.apiFactory.updateProduct(fd, this.productForm.value._id)
        } else {
            result = this.apiFactory.createProduct(fd)
        }

        this.spinner.show()
        result.subscribe((response: any) => {
            if (response && response.code && response.code == 200) {
                this.spinner.hide()
                this.formSubmitted = false;
                this.router.navigate(['product-management'])
                this.toastr.success(response.message)
            } else {
                this.spinner.hide()
                this.toastr.error(response.message)
            }
        })
    }
}