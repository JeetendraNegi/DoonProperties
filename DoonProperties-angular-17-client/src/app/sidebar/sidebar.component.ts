import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'fa-bar-chart', class: '' },
    { path: '/user-types', title: 'User Types', icon: 'fa-user-secret', class: '' },
    { path: '/users', title: 'App Users', icon: 'fa-users', class: '' },
    { path: '/document-types', title: 'Document Type', icon: 'fa-briefcase', class: '' },
    { path: '/properties', title: 'Properties', icon: 'fa-globe', class: '' },
    { path: '/verification-status', title: 'Verification Status', icon: 'fa-spinner', class: '' },
    { path: '/icons', title: 'Icons', icon: 'fa-diamond', class: '' },
    { path: '/maps', title: 'Maps', icon: 'fa-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'fa-bell', class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table', title: 'Table List', icon: 'fa-table', class: '' },
    { path: '/typography', title: 'Typography', icon: 'fa-pencil-square-o', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router){}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isActive(path: string): boolean {
        if (path === '/user-types' && (this.router.url.startsWith('/add-userType'))) {
            return true;
        } else if(path === '/verification-status' && (this.router.url.startsWith('/add-verification-status'))) {
            return true;
        } else if (path == '/document-types' && (this.router.url.startsWith('/add-document-types'))) {
            return true;
        } else if (path == '/users' && (this.router.url.startsWith('/add-users'))) {
            return true;
        }
        return this.router.url.startsWith(path);
    }
}
