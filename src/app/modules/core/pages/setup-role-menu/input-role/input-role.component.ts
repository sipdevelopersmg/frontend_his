import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MainMenuModel, SidebarMenuModel } from '../../../models/navigation/menu.model';
import { RolesModel } from '../../../models/setup-role-menu/setup-role-menu.model';
import { SetupRoleMenuService } from '../../../services/setup-role-menu/setup-role-menu.service';
import { SetupRoleService } from '../../../services/setup-role/setup-role.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-input-role',
    templateUrl: './input-role.component.html',
    styleUrls: ['./input-role.component.css']
})
export class InputRoleComponent implements OnInit, AfterViewInit {

    @Input('RolesData') RolesData: RolesModel;

    MainMenuAktif: MainMenuModel[];

    MainMenuNonAktif: MainMenuModel[];

    constructor(
        private setupRoleService: SetupRoleService,
        private setupRoleMenuService: SetupRoleMenuService) { }

    ngOnInit(): void {
        this.MainMenuNonAktif = [
            {
                caption: "Order Management",
                caption_menu_parent: "",
                icon: "icon-order-management",
                icon_menu_parent: "",
                id_menu: 4,
                id_menu_parent: 0,
                is_parent: true,
            }
        ];
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
                this.MainMenuAktif = result.data;
            });
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

    onChangeChecboxActiveMainMenu(event: MouseEvent, MainMenu: any): void {
        event.preventDefault();
        event.stopPropagation();

        // ** Variable element checkbox saat ini
        let elem = document.getElementById(MainMenu.id_menu + "Checkbox") as HTMLInputElement;

        // ** Antisipasi dulu biar tidak ter-check
        elem.checked = !elem.checked;

        if (MainMenu.childMenu) {
            // ** Munculkan alert confirmation 
            Swal.fire({
                icon: 'question',
                title: 'Apakah Anda Yakin',
                text: 'Mengubah Status ' + MainMenu.caption + ' ?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Yes`,
                denyButtonText: `Tidak, Kembali`,
            }).then((result) => {
                if (result.isConfirmed) {
                    elem.checked = !elem.checked;
                    elem.value = elem.checked ? (true).toString() : (false).toString();

                    for (let i = 0; i < MainMenu.childMenu.length; i++) {
                        let checks = (<HTMLInputElement>document.getElementById(MainMenu.childMenu[i].id_menu + "Checkbox"));

                        if (!elem.checked) {
                            checks.checked = false;
                        } else {
                            // ** Do Nothing
                        }

                        checks.value = (false).toString();
                    };

                } else {
                    elem.checked = elem.checked;
                }
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Apakah Anda Yakin',
                text: 'Mengubah Status ' + MainMenu.caption + ' ?',
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
}
