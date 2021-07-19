import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ChildMenu, MainMenu } from 'src/app/modules/core/models/navigation/menu.model';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'mol-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MolMainMenuComponent implements OnInit {

    // ** Variable untuk menampung MainMenu
    MainMenu: MainMenu[] = [];

    // ** Variable untuk Kondisi menampilkan MainMenu atau tidak
    ShowMainMenu: boolean = true;

    // ** Variable untuk menampung SidebarMenu
    ChildMenu: ChildMenu[];

    constructor(private navigationService: NavigationService) {
        this.onGetMainMenuSubject();
        this.onGetBackToMainMenuState();
    }

    ngOnInit(): void {
        this.navigationService.onFetchMenuFromFirebase();
        this.navigationService.onFetchChildMenuFromFirebase();
        this.navigationService.onFetchSidebarMenuFromFirebase();
    }

    onGetMainMenuSubject(): void {
        this.navigationService.onGetMainMenuSubject()
            .subscribe((result) => {
                this.MainMenu = result;
            });
    }

    onGetBackToMainMenuState(): void {
        this.navigationService.onGetBackToMainMenu()
            .subscribe((result) => {
                if (result === true) {
                    // ** Set Value Show Main Menu menjadi true
                    this.ShowMainMenu = true;

                    // this.navigationService.onSetBackToMainMenu(false);
                }
            });
    }

    onClickMenu(MenuId: number, MenuTitle: string): void {
        this.navigationService.onFetchChildMenuFromLocalStorage(MenuId);
        this.navigationService.onSetMainMenuTitle(MenuTitle);
    }

    onClickChildMenu(ChildMenuId: number): void {
        this.navigationService.onFetchSidebarMenuFromLocalStorage(ChildMenuId);

        // this.navigationService.onSetActiveSidebarMenu(ChildMenuId);
    }
}
