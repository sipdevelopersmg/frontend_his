import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';

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

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    ModalDialogSetupUserTitle: string;
    @ViewChild('modalDialogSetupUser') modalDialogSetupUser: TemplateRef<any>;

    // ** Form Add / Edit Setup User
    FormSetupUser: FormGroup;

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
        private modalService: BsModalService) { }

    ngOnInit(): void {
        this.GridSetupUserToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash fa-sm', id: 'delete' },
            'Search'
        ];

        this.FormSetupUser = this.formBuilder.group({
            user_name: ['', []],
            nama_lengkap: ['', []],
            password: ['', []],
            confirmation_password: ['', []],
            id_role: [0, []],
            role_name: ['Admisi', []],
            timeout: [0, []],
            status_active: [true, []],
            created_date: ['', []]
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
        console.log(args);
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

    onSubmitFormSetupUser(FormSetupUser: any) {

        FormSetupUser.created_date = new Date();

        this.GridSetupUserDataSource.push(...FormSetupUser);

        this.gridSetupUser.Grid.refresh();

        setTimeout(() => {
            this.FormSetupUser.reset();

            this.modalRef.hide();
        }, 250);
    }

    get user_name() { return this.FormSetupUser.get('user_name'); }
    get nama_lengkap() { return this.FormSetupUser.get('nama_lengkap'); }
    get password() { return this.FormSetupUser.get('password'); }
    get confirmation_password() { return this.FormSetupUser.get('confirmation_password'); }
    get id_role() { return this.FormSetupUser.get('id_role'); }
    get timeout() { return this.FormSetupUser.get('timeout'); }
    get status_active() { return this.FormSetupUser.get('status_active'); }
}
