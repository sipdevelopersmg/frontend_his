import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { MainMenuModel, SidebarMenuModel, TopMenuModel } from '../../../models/navigation/menu.model';
import { RolesModel } from '../../../models/setup-role-menu/setup-role-menu.model';
import { SetupRoleMenuService } from '../../../services/setup-role-menu/setup-role-menu.service';
import { SetupRoleService } from '../../../services/setup-role/setup-role.service';
import Swal from 'sweetalert2';
import GridRoleColumns from '../json/GridSetupRoleMenu.json';

@Component({
    selector: 'app-data-role',
    templateUrl: './data-role.component.html',
    styleUrls: ['./data-role.component.css']
})
export class DataRoleComponent implements OnInit, AfterViewInit {

    @Input('RolesData') RolesData: RolesModel;

    // ** Menu - menu properties
    @Input('MainMenu') MainMenu: MainMenuModel[];
    TopMenu: TopMenuModel[];
    MenuSidebar: SidebarMenuModel[];

    // ** Card Sidebar Menu Properties
    CardSidebarMenuTitle: string = "Daftar Menu Sidebar";

    // ** Grid Setup Role Button Properties
    private gridSetupRoleButton: MolGridComponent = null;
    GridSetupRoleButtonEditSettings: EditSettingsModel = { allowEditing: true };
    GridSetupRoleButtonColums = GridRoleColumns;
    GridSetupRoleButtonDataSource: any;

    // ** Grid Setup Role Button Properties
    private gridSetupRoleFieldGrid: MolGridComponent = null;
    GridSetupRoleFieldGridEditSettings: EditSettingsModel = { allowEditing: true };
    GridSetupFieldGridColums = GridRoleColumns;
    GridSetupFieldGridDataSource: any;

    // ** Modal Dialog Add / Edit Button & Field Grid Properties
    modalRef: BsModalRef;
    ModalDialogSetupRoleMenuTitle: string;
    @ViewChild('modalDialogSetupRoleMenu') modalDialogSetupRoleMenu: TemplateRef<any>;

    constructor(
        private modalService: BsModalService,
        private setupRoleService: SetupRoleService,
        private setupRoleMenuService: SetupRoleMenuService
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        if (Object.keys(this.RolesData).length != 0) {
            this.onGetMainMenu(this.RolesData);
        } else {
            this.setupRoleService.onGetCurrentDataRole()
                .subscribe((result: RolesModel) => {
                    this.RolesData = result;

                    this.onGetMainMenu(this.RolesData);
                });
        }
    }

    onGetMainMenu(RoleData: RolesModel) {
        this.setupRoleMenuService.onGetAllMainMenuByRoleId(RoleData.id_role)
            .subscribe((result) => {
                this.MainMenu = result.data;
            });
    }

    onGetMenuSidebar(TopMenuCaption: string, TopMenuId: number) {
        this.CardSidebarMenuTitle = "Daftar Menu Sidebar pada Menu " + TopMenuCaption;

        this.setupRoleMenuService.onGetSidebarMenuByMenuIdAndRoleId(TopMenuId, this.RolesData.id_role)
            .subscribe((result) => { this.MenuSidebar = result.data; });
    }

    onTogglingHideChildMenu(id: any) {
        this.onTogglingIconArrow(id);

        // ** Get element berdasarkan ChildMenu yg dipilih
        let elem = document.getElementById(id + "ChildMenu");

        // ** Buat variable kondisi
        let conditionHidden = elem.classList.contains("is-hidden");
        let conditionShow = elem.classList.contains("is-show");

        // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
        if (conditionHidden) {
            if (conditionShow) {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-selected");
            } else {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-show");
                elem.classList.add("is-selected");
            };
        };

        // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
        if (!conditionHidden) {
            if (conditionShow) {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-show");
                elem.classList.remove("is-selected");

            } else {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-selected");
            }
        };
    }

    onTogglingIconArrow(id: any) {
        // ** Get element berdasarkan Icon yg dipilih
        let elem = document.getElementById(id + "Icon");

        // ** Buat variable kondisi
        let conditionRight = elem.classList.contains("fa-angle-right");
        let conditionDown = elem.classList.contains("fa-angle-down");

        // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
        if (conditionRight && !conditionDown) {
            elem.classList.remove("fa-angle-right");
            elem.classList.add("fa-angle-down");
        };

        if (!conditionRight && conditionDown) {
            elem.classList.remove("fa-angle-down");
            elem.classList.add("fa-angle-right");
        };
    }

    onTogglingHideSidebarChildMenu(id: any) {
        this.onTogglingSidebarIconArrow(id);

        // ** Get element berdasarkan ChildMenu yg dipilih
        let elem = document.getElementById(id + "SidebarChild");

        // ** Buat variable kondisi
        let conditionHidden = elem.classList.contains("is-hidden");
        let conditionShow = elem.classList.contains("is-show");

        // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
        if (conditionHidden) {
            if (conditionShow) {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-selected");
            } else {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-show");
                elem.classList.add("is-selected");
            };
        };

        // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
        if (!conditionHidden) {
            if (conditionShow) {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-show");
                elem.classList.remove("is-selected");

            } else {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-selected");
            }
        };
    }

    onTogglingSidebarIconArrow(id: any) {
        // ** Get element berdasarkan Icon yg dipilih
        let elem = document.getElementById(id + "SidebarIcon");

        // ** Buat variable kondisi
        let conditionRight = elem.classList.contains("fa-angle-right");
        let conditionDown = elem.classList.contains("fa-angle-down");

        // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
        if (conditionRight && !conditionDown) {
            elem.classList.remove("fa-angle-right");
            elem.classList.add("fa-angle-down");
        };

        if (!conditionRight && conditionDown) {
            elem.classList.remove("fa-angle-down");
            elem.classList.add("fa-angle-right");
        };
    }

    onChangeChecboxActiveSidebarMenu(event: MouseEvent, SidebarMenu: any): void {
        event.preventDefault();
        event.stopPropagation();

        // ** Variable element checkbox saat ini
        let elem = document.getElementById(SidebarMenu.id_menu_sidebar + "Checkbox") as HTMLInputElement;

        // ** Antisipasi dulu biar tidak ter-check
        elem.checked = !elem.checked;

        if (SidebarMenu.childSidebarMenu) {
            // ** Munculkan alert confirmation 
            Swal.fire({
                icon: 'question',
                title: 'Apakah Anda Yakin',
                text: 'Mengubah Status ' + SidebarMenu.caption + ' ?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Yes`,
                denyButtonText: `Tidak, Kembali`,
            }).then((result) => {
                if (result.isConfirmed) {
                    elem.checked = !elem.checked;
                    elem.value = elem.checked ? (true).toString() : (false).toString();

                    for (let i = 0; i < SidebarMenu.childSidebarMenu.length; i++) {
                        let checks = (<HTMLInputElement>document.getElementById(SidebarMenu.childSidebarMenu[i].id_menu_sidebar + "Checkbox"));

                        if (!elem.checked) {
                            checks.checked = false;
                        } else {
                            // ** Do Nothing
                        }

                        checks.value = (false).toString();
                    };

                    console.log(SidebarMenu);

                } else {
                    elem.checked = elem.checked;
                }
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Apakah Anda Yakin',
                text: 'Mengubah Status ' + SidebarMenu.caption + ' ?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Yes`,
                denyButtonText: `Tidak, Kembali`,
            }).then((result) => {
                if (result.isConfirmed) {
                    elem.checked = !elem.checked;
                    elem.value = elem.checked ? (true).toString() : (false).toString();
                } else {
                    elem.checked = elem.checked;
                }
            });
        }
    }

    onSeeDetailButtonAndFieldGrid(SidebarMenu: SidebarMenuModel): void {

        // ** Kosongkan Grid Datasource terlebih dahulu
        this.GridSetupFieldGridDataSource = [];
        this.GridSetupRoleButtonDataSource = [];

        // ** Set Modal Dialog Title
        this.ModalDialogSetupRoleMenuTitle = "Data Button & Field Grid " + SidebarMenu.caption;

        // ** Set Modal Size
        this.modalRef = this.modalService.show(
            this.modalDialogSetupRoleMenu,
            Object.assign({}, { class: 'modal-lg' })
        );

        // ** Panggil function untuk Get Button dan Field Grid
        this.onGetButtonAndFieldGridDatasource(SidebarMenu.id_menu_sidebar);
    }

    onGetButtonAndFieldGridDatasource(SidebarMenuId: number): void {
        this.setupRoleMenuService.onGetFieldGridBySidebarMenuIdAndRoleId(SidebarMenuId, this.RolesData.id_role)
            .subscribe((result) => {
                this.GridSetupFieldGridDataSource = result.data;
            });

        this.setupRoleMenuService.onGetButtonSidebarMenuIdAndRoleId(SidebarMenuId, this.RolesData.id_role)
            .subscribe((result) => {
                this.GridSetupRoleButtonDataSource = result.data;
            });
    }

    onInitalizedGridButton(component: MolGridComponent) {
        this.gridSetupRoleButton = component;
    }

    onSelectedRowGridButton(args: any): void {
        // console.log(args);
    }

    onActionCompleteGridButton(args: any): void {
        const requestType = args.requestType;
        const data = args.data;
        const previousData = args.previousData;

        if (requestType === "save") {
            if (data !== previousData) {

                // ** Munculkan alert confirmation 
                Swal.fire({
                    icon: 'question',
                    title: 'Apakah Anda Yakin',
                    text: 'Mengubah Status Tombol ' + data.caption + ' ?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Yes`,
                    denyButtonText: `Tidak, Kembali`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.GridSetupRoleButtonDataSource[args.rowIndex] = data;
                    } else {
                        this.GridSetupRoleButtonDataSource[args.rowIndex] = previousData;
                    }
                }).then(() => {
                    this.gridSetupRoleButton.Grid.refresh();
                });
            }
        }
    }

    onInitalizedGridField(component: MolGridComponent) {
        this.gridSetupRoleFieldGrid = component;
    }

    onActionCompleteGridField(args: any): void {
        const requestType = args.requestType;
        const data = args.data;
        const previousData = args.previousData;

        if (requestType === "save") {
            if (data !== previousData) {

                // ** Munculkan alert confirmation 
                Swal.fire({
                    icon: 'question',
                    title: 'Apakah Anda Yakin',
                    text: 'Mengubah Status Field ' + data.nama_header_text + ' ?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Yes`,
                    denyButtonText: `Tidak, Kembali`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.GridSetupFieldGridDataSource[args.rowIndex] = data;
                    } else {
                        this.GridSetupFieldGridDataSource[args.rowIndex] = previousData;
                    }
                }).then(() => {
                    this.gridSetupRoleFieldGrid.Grid.refresh();
                });
            }
        }
    }

    onSelectedRowGridFieldGrid(args: any): void {
        // console.log(args);
    }
}
