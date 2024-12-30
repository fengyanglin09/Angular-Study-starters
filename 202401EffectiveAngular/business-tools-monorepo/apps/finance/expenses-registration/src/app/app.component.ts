import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {NavbarComponent, NavbarItem} from "@bt-libs/shared/ui/common-components";

@Component({
  imports: [NxWelcomeComponent, RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'expenses-registration';

  navItems: NavbarItem[] = [{ label: 'expenses approval', route: '/expenses-approval'}];


}
