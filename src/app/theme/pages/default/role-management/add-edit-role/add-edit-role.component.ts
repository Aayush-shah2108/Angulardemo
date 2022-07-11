import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleManagementService } from '../role-management.service';

declare const $: any;

@Component({
    selector: "app-add-edit-role",
    templateUrl: "./add-edit-role.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AddEditRoleComponent implements OnInit {
    roleForm: FormGroup;
    formSubmitted: boolean;
    entities: string[];
    constructor(
        private formBuilder: FormBuilder, private activeRoute: ActivatedRoute,
        private toastr: ToastrService,
        public spinner: NgxSpinnerService, private router: Router,
        private apiFactory: RoleManagementService) {

    }

    ngOnInit() {
        this.spinner.hide()
        this.buildRoleForm()

        if (this.activeRoute.snapshot.params['id']) {
            this.apiFactory.getRoleDetails(this.activeRoute.snapshot.params['id']).subscribe((result: any) => {
                // this.spinner.hide()
                if (!result.success) {
                    let data = result
                    if (data && data.code && data.code == 200 && data.code) {
                        this.roleForm.patchValue(data.data)
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
    buildRoleForm() {
        this.roleForm = this.formBuilder.group({
            _id: [],
            roleId: ['', [Validators.required]],
            roleName: ['', [Validators.required]],
        })
    }

    /**
     * add or update role details
     */
    saveRole() {
        this.formSubmitted = true;
        if (this.roleForm.invalid) {
            this.toastr.error('Please provide valid details')
            return false
        }

        var fd = new FormData();
        fd.append('roleId', this.roleForm.value.roleId);
        fd.append('roleName', this.roleForm.value.roleName);

        let result;

        if (this.activeRoute.snapshot.paramMap.get('id')) {
            result = this.apiFactory.updateRole(fd, this.roleForm.value._id)
        } else {
            result = this.apiFactory.createRole(fd)
        }

        this.spinner.show()
        result.subscribe((response: any) => {
            if (response && response.code && response.code == 200) {
                this.spinner.hide()
                this.formSubmitted = false;
                this.router.navigate(['role-management'])
                this.toastr.success(response.message)
            } else {
                this.spinner.hide()
                this.toastr.error(response.message)
            }
        })
    }
}