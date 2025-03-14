import { Route } from '@angular/router';
import {MainContentComponent} from "./layout/main-content/main-content.component";

export const appRoutes: Route[] = [
    { path: 'home', component: MainContentComponent },
    { path: 'dashboard', component: MainContentComponent },
    { path: 'settings', component: MainContentComponent },
    { path: 'about', component: MainContentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
