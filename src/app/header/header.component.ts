import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() activeTab = new EventEmitter<string>();

    showRecipes() {
        this.activeTab.emit('recipes');
    }
    showShoppingList() {
        this.activeTab.emit('shoppinglist');
    }

}
