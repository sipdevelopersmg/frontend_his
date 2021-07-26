import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { ChildMenu, SidebarMenu, MainMenuModel, TopMenuModel, SidebarMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { HttpResponseModel } from '../models/Http-Operation/HttpResponseModel';
import { map } from 'rxjs/operators';
import { IAuthenticationResponseModel } from '../../auth/models/authentication.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private history: string[] = [];

    // ** Ini adalah Global State untuk menampung Main Menu yg telah kita pilih
    public MainMenuSubject = new Subject<MainMenuModel>();

    // ** Ini adalah Global State untuk menampung Child / Top Menu yg telah kita pilih
    public ChildTopMenuSubject = new Subject<TopMenuModel>();
    public ActiveChildTopMenuSubject = new Subject<TopMenuModel>();

    // ** Ini adalah Global State untuk menampung Main Menu Title yg telah kita pilih
    public MainMenuTitleSubject = new Subject<string>();

    // ** Ini adalah Global State untuk menampung Sidebar Menu yg telah kita get dari session storage
    public SidebarMenuSubject = new Subject<SidebarMenuModel>();
    public ActiveSidebarMenuSubject = new Subject<SidebarMenuModel>();

    // ** Ini adalah Global State untuk menampung Toggle / Variable BackToMainMenu
    // ** Digunakan di treeview-menu.component.ts dan main-menu.component.ts
    public IsBackToMainMenu = new Subject<boolean>();

    public HideTopMenu = new Subject<boolean>();

    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
            }
        });
    }

    // !! ================ Main Menu Subject ======================   
    // ** Ini adalah Method untuk mendapatkan MainMenu dari session storage
    onFetchMainMenuFromSessionStorage(): any {
        const UserData: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

        const MainMenu = UserData.menuJson.mainMenu;

        sessionStorage.setItem('MainMenu', JSON.stringify(MainMenu));

        this.MainMenuSubject.next(JSON.parse(sessionStorage.getItem('MainMenu')));

        return MainMenu;
    }

    onGetMainMenuSubject(): Observable<any> {
        return this.MainMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Child Menu / Top Menu Subject ==========
    // ** Ini adalah Method untuk mendapatkan ChildMenu dari session storage
    onFetchChildMenuFromSessionStorage(ParentId: number): any {
        const UserData: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

        const TopMenu = UserData.menuJson.topMenu;

        const childMenuById = TopMenu.filter((menu: TopMenuModel) => {
            return menu.id_menu_parent === ParentId;
        });

        sessionStorage.setItem('ActiveChildMenu', JSON.stringify(childMenuById));

        this.onSetActiveChildMenuSubject(JSON.parse(sessionStorage.getItem('ActiveChildMenu')));

        return childMenuById;
    }

    onSetActiveChildMenuSubject(ChildMenuById: any): any {
        if (ChildMenuById) {
            this.ActiveChildTopMenuSubject.next(ChildMenuById);
        }
    }

    onGetActiveChildMenuSubject(): Observable<any> {
        return this.ActiveChildTopMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Sidebar Menu Subject ===================
    // ** Ini adalah Method untuk mendapatkan ChildMenu dari session storage
    onFetchSidebarMenuFromSessionStorage(ChildMenuId: number): any {

        const UserData: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

        const sidebarMenu = UserData.menuJson.sidebarMenu;

        const sidebarMenuById = sidebarMenu.filter((item: SidebarMenuModel) => {
            return item.id_top_menu == ChildMenuId;
        });

        sessionStorage.setItem('ActiveSidebarMenu', JSON.stringify(sidebarMenuById));

        this.onSetActiveSidebarMenuSubject(JSON.parse(sessionStorage.getItem('ActiveSidebarMenu')));

        return sidebarMenuById;
    }

    onSetActiveSidebarMenuSubject(SidebarMenuById: any): any {
        if (SidebarMenuById) {
            this.ActiveSidebarMenuSubject.next(SidebarMenuById);
        }
    }

    // ** Buat Method (Observable) untuk menset Global State SidebarMenu menjadi Observable agar di Component Parent bisa Subscribe
    onGetActiveSidebarMenuSubject(): Observable<any> {
        return this.ActiveSidebarMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Main Menu Title Subject ================
    // ** Buat Method (Observable) untuk menset Global State SidebarMenu menjadi Observable agar nanti di Component Parent bisa subscribe
    onSetMainMenuTitle(value: string): any {
        sessionStorage.setItem('ActiveMainMenuTitle', value);

        const ActiveMainMenuTitle = sessionStorage.getItem('ActiveMainMenuTitle');

        if (ActiveMainMenuTitle) {
            this.MainMenuTitleSubject.next(ActiveMainMenuTitle);
        }
    }

    onGetMainMenuTitle(): Observable<any> {
        return this.MainMenuTitleSubject.asObservable();
    }
    // !! =========================================================


    // !! ============ State Back to Main Menu Subject ============
    onSetBackToMainMenu(value: boolean): any {
        this.router.navigateByUrl('dashboard/beranda');
        this.IsBackToMainMenu.next(value);
    }

    onGetBackToMainMenu(): Observable<any> {
        return this.IsBackToMainMenu.asObservable();
    }
    // !! =========================================================


    onSetHideTopMenuSubject(value: boolean): any {
        this.HideTopMenu.next(value);
    }

    onGetHideTopMenuSubject(): Observable<any> {
        return this.HideTopMenu.asObservable();
    }

    // ** Digunakan untuk kembali ke Halaman Sebelumnya. Biasa nya digunakan ketika User tiba di Component PageNotFound
    backToPreviousPage(): any {
        this.history.pop();

        this.router.navigateByUrl('dashboard/beranda');
    }
}
