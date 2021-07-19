export interface MainMenu {
    Id: number;
    Name: string;
}

export interface ChildMenu {
    Id: number;
    Name: string;
    ParentId: number;
}

export interface SidebarMenu {
    ChildMenuId: number;
    SidebarMenu: Array<SidebarMenuItems>;
    Url?: string;
}

export interface SidebarMenuItems {
    Id: number;
    Name: string;
    Url: string;
}