import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { GetSetupUserModel } from '../../models/setup-user/setup-user.model';
import { SetupRoleService } from '../../services/setup-role/setup-role.service';
import { SetupUserService } from '../../services/setup-user/setup-user.service';

import GridSetupUser from './json/GridSetupUser.json';

@Component({
    selector: 'app-setup-user',
    templateUrl: './setup-user.component.html',
    styleUrls: ['./setup-user.component.css']
})
export class SetupUserComponent implements OnInit {

    // ** Grid Setup User Properties
    @ViewChild('gridSetupUser', { static: true }) gridSetupUser: MolGridComponent;
    GridSetupUserEditSettings: EditSettingsModel = { allowAdding: true };
    GridSetupUserToolbar: any;
    GridAntrianColums = GridSetupUser;
    GridSetupUserDataSource: any[];
    GridAntrianIrjaPaging = { pageSizes: true, pageSize: 12 };
    GridSetupUserContextMenuItems: MenuItemModel[] = [
        {
            id: 'reset',
            text: 'Reset Password',
            iconCss: 'fas fa-redo-alt'
        }
    ];

    SelectedUserData: GetSetupUserModel;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    ModalDialogSetupUserTitle: string;
    @ViewChild('modalDialogSetupUser') modalDialogSetupUser: TemplateRef<any>;

    // ** Form Add / Edit Setup User
    FormSetupUser: FormGroup;

    // ** Dropdown Role Properties
    DropdownRoleDatasource: any;
    DropdownRoleFields: object = { text: 'nama_role', value: 'id_role' };

    // ** Input Field State
    inputFieldState = 'normal';

    // ** Dropdownlist Session Timer Properties
    TimerDataSource: any;
    TimerFields: any;

    // ** Radio Button Status Active Properties
    RadioButtonStatus: object[] = [
        { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
        { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
    ];

    constructor(
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private setupRoleService: SetupRoleService,
        private setupUserService: SetupUserService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.GridSetupUserToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash fa-sm', id: 'delete' },
            'Search'
        ];

        this.FormSetupUser = this.formBuilder.group({
            id_role: [0, []],
            user_name: ['', []],
            password: ['', []],
            full_name: ['', []],
            user_created: [0, []]
        });

        this.onGetAllActiveUser();

        this.onGetRoleActive();
    }

    onGetAllActiveUser() {
        this.setupUserService.onGetAllActiveUser()
            .subscribe((result) => {
                this.GridSetupUserDataSource = result.data;
            });
    }

    onToolbarClick(args: any): void {
        const action = args.item.id;

        if (action === 'add') {
            this.ModalDialogSetupUserTitle = "Input Data User";

            this.modalRef = this.modalService.show(
                this.modalDialogSetupUser,
                Object.assign({}, { class: 'modal-lg' })
            );
        }

    }

    onSelectGridContextMenu(args: any): void {
        if (args.item.id == "reset") {
            Swal.fire({
                icon: 'question',
                title: 'Apakah Anda Yakin',
                text: `Mengubah Password User ${this.SelectedUserData.full_name} ?`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Yes`,
                denyButtonText: `Tidak, Kembali`,
                focusDeny: true
            }).then((result) => {
                if (result.isConfirmed) {
                    this.authenticationService.onResetPassword(this.SelectedUserData.id_user)
                        .subscribe((result) => {
                            let message = `Password Baru User ${this.SelectedUserData.full_name} : ${result.data}`

                            this.utilityService.onShowingCustomAlert('success', 'Success', message);
                        });
                } else if (result.isDenied) {
                    // ** Do Nothing
                }
            });
        }
    }

    onRowSelected(args: any): void {
        const Data: GetSetupUserModel = args.data;

        this.SelectedUserData = Data;
    }

    onTogglingSeePassword(ElementId: string): void {
        const elem = (document.getElementById(ElementId) as HTMLInputElement);

        const elemIcon = (document.getElementById(ElementId + 'Icon') as HTMLElement);

        if (elem.type === 'password') {
            elem.type = 'text';
            elemIcon.classList.remove('fa-eye');
            elemIcon.classList.add('fa-eye-slash');
        } else {
            elem.type = 'password';
            elemIcon.classList.remove('fa-eye-slash');
            elemIcon.classList.add('fa-eye');
        }
    }

    onGetRoleActive() {
        this.setupRoleService.onGetAllRoleActive()
            .subscribe((result) => {
                this.DropdownRoleDatasource = result.data;
            });
    }

    onSubmitFormSetupUser(FormSetupUser: any) {

        // ** Get User Data from Session Storage
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        FormSetupUser.user_created = 2;

        // ** Eksekusi Function di Setup User Service
        this.setupUserService.onInsertUser(FormSetupUser)
            .subscribe((result) => {

                if (result.responseResult) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Disimpan')
                        .then(() => {
                            this.onClearFormSetupUser();

                            this.modalRef.hide();

                            this.onGetAllActiveUser();
                        });
                };

            }, (error) => {
                console.log(error);
            });
    }

    onClearFormSetupUser() {
        this.id_role.setValue(0);
        this.user_name.setValue('');
        this.password.setValue('');
        this.full_name.setValue('');
        (<HTMLInputElement>document.getElementById('confirmation_password')).value = '';
    }

    get id_role() { return this.FormSetupUser.get('id_role'); }
    get user_name() { return this.FormSetupUser.get('user_name'); }
    get password() { return this.FormSetupUser.get('password'); }
    get full_name() { return this.FormSetupUser.get('full_name'); }
    get user_created() { return this.FormSetupUser.get('user_created'); }
}
