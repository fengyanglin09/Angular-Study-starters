import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'bt-libs-ui-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  navbarItems = input([], { transform: addHome });
  languages = input<string[]>([]);

  @Output() languageChange = new EventEmitter();

}

function addHome(items: NavbarItem[]): NavbarItem[] {
  return [{ label: 'home', route: '/' }, ...items];
}

export interface NavbarItem {
  label: string;
  route: string
}
