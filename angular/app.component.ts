import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeTab: string = 'HTML'; // Default active tab

  // Method to set the active tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}