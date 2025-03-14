import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HeaderComponent} from "./layout/header/header.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {MainContentComponent} from "./layout/main-content/main-content.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {NgClass} from "@angular/common";

@Component({
    imports: [NxWelcomeComponent, RouterModule, HeaderComponent, SidebarComponent, MainContentComponent, FooterComponent, NgClass],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
    isSidebarCollapsed = false;

    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
}
