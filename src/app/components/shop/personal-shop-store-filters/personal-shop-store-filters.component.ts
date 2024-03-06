import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';

@Component({
  selector: 'app-personal-shop-store-filters',
  templateUrl: './personal-shop-store-filters.component.html',
  styleUrls: ['./personal-shop-store-filters.component.scss'],
  animations: [
    trigger('expandAnimation', [
      state('collapsed', style({height: '0', overflow: 'hidden', display: 'none'})),
      state('expanded', style({height: '*', overflow: 'hidden'})),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})
export class PersonalShopStoreFiltersComponent {
  expandOption: string = 'categories';

  expand(tab: string): void {
    this.expandOption = tab;
  }
}
