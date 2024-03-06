import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-shop-store-filters',
  templateUrl: './personal-shop-store-filters.component.html',
  styleUrls: ['./personal-shop-store-filters.component.scss'],
  animations: [
    trigger('expandAnimation', [
      state('collapsed', style({ height: '0', overflow: 'hidden', display: 'none' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})
export class PersonalShopStoreFiltersComponent {
  items = [
    { name: 'Item 1', expanded: false, subItems: ['Subitem 1.1', 'Subitem 1.2'] },
    { name: 'Item 2', expanded: false, subItems: ['Subitem 2.1', 'Subitem 2.2'] },
    // Add more items as needed
  ];

  toggleItem(item: any): void {
    item.expanded = !item.expanded;
  }
}
