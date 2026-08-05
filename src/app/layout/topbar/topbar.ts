import { Component, EventEmitter, Output } from '@angular/core';
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
  toggleNotifications() {
    this.showNotification = !this.showNotification;
  }
  showProfile=false;
}
