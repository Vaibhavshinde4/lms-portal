import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  showHamburger = false;
  activeRoute = '';

  constructor(private router: Router) {}

  menuItems = [
    {
      label: 'Dashboard',
      route: 'dashboard',
      icon: `
      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
      <rect x="14" y="14" width="7" height="7" rx="1"></rect>`,
    },
    {
      label: 'My Climb',
      route: 'climb',
      icon: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5l-2 5-5 2 2-5z"/>',
    },
    {
      label: 'Toolbelt',
      route: 'toolbelt',
      icon: `
<circle cx="12" cy="12" r="9"></circle>
<path d="M14.5 9.5l-2 5-5 2 2-5z"></path>
`,
    },
    {
      label: 'Schedule',
      route: 'schedule',
      icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    },
    {
      label: 'Progress & Certification',
      route: 'progress',
      icon: '<path d="M12 14l4-4"/><path d="M4 18a8 8 0 1 1 16 0"/>',
    },
    {
      label: 'My Cohort',
      route: 'cohort',
      icon: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20a6 6 0 0 1 12 0"/>',
    },
    {
      label: 'My Instructors',
      route: 'instructors',
      icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    },
    {
      label: 'Resources',
      route: 'resources',
      icon: '<path d="M10 13a5 5 0 0 0 7 0l3-3"/><path d="M14 11a5 5 0 0 0-7 0l-3 3"/>',
    },
  ];

  
  setActive(route: string): void {
    this.activeRoute = route;
    this.router.navigate([route]);
  }

  

  toggleMenu(): void {
    this.toggleSidebar.emit();
  }
}
