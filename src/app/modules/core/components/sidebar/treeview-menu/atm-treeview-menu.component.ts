import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'atm-treeview-menu',
    templateUrl: './atm-treeview-menu.component.html',
    styleUrls: ['./atm-treeview-menu.component.css']
})
export class AtmTreeviewMenuComponent implements OnInit {

    // ** Variable Menu
    MenuSidebar: SidebarMenuModel[];
    MenuSidebarSubscription: Subscription;

    // ** Sidebar Attribute and Properties
    @Input() SidebarMenuTitle: string;
    SidebarMenuTitleSubscription: Subscription;

    @Input("SidebarCollapse") SidebarCollapse: boolean = false;
    IsActiveState: boolean = false;

    // ** Tree View Menu Attribute
    TreeViewMenuDatasource: Object[];
    TreeViewMenuFields: Object;

    constructor(
        private router: Router,
        private navigationService: NavigationService
    ) {
        this.onGetMainMenuTitle();
        this.onGetSidebarMenu();
    }

    ngOnInit(): void {
        this.SidebarMenuTitle = sessionStorage.getItem("ActiveMainMenuTitle");

        let SidebarMenu = JSON.parse(sessionStorage.getItem("ActiveSidebarMenu"));

        this.MenuSidebar = SidebarMenu && SidebarMenu.length >= 1 ? SidebarMenu : [];
    }

    // ** Untuk mendapatkan Main Menu Title
    onGetMainMenuTitle() {
        this.navigationService.onGetMainMenuTitle()
            .subscribe((_result) => {
                this.SidebarMenuTitle = _result;
            });
    }

    // ** Untuk mendapatkan Sidebar Menu Datasource
    onGetSidebarMenu() {
        this.navigationService.onGetActiveSidebarMenuSubject()
            .pipe(
                map((_result) => {
                    if (_result.length >= 1)
                        return _result;
                    else
                        return [];
                })
            )
            .subscribe((_result) => {
                this.MenuSidebar = _result;
            })
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

    onTogglingIconArrow(id: string) {
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

    onClickSidebarItem(url: string) {
        // this.router.navigateByUrl("dashboard/" + url);

        this.router.navigateByUrl("dashboard/Dokter/diagnosa");

        setTimeout(() => {
            let NavbarBrand = document.getElementById("NavbarBrand");
            NavbarBrand.click();

            this.navigationService.onSetHideTopMenuSubject(true);
        }, 100);
    }

    onClickBackToMainMenu(args: any) {
        this.navigationService.onSetBackToMainMenu(true);
    }

    onGetActiveSidebarMenu() {

    }
}
