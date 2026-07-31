import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar';
import { TopbarComponent } from './layout/topbar/topbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  sidebarOpen = false;
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
  protected readonly title = signal('lms-portal');
}
