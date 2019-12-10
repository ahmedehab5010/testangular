import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testangular';
  activeTab = 'recipes';

  onTabChange(activeTab: string) {
    this.activeTab = activeTab;
  }
}
