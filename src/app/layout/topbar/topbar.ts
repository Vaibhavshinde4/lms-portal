import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notification } from '../notification/notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FormsModule, CommonModule, Notification],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss'],
})
export class TopbarComponent {
  searchText = '';

  showNotification = false;
  showProfile = false;
  isDarkTheme = false;

  toggleNotifications(): void {
    this.showNotification = !this.showNotification;
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  closeProfile(): void {
    this.showProfile = false;
  }

  openProfile(): void {
    this.showProfile = true;
  }

  switchLogin(): void {
    console.log('Switch Login Clicked');
  }
}
