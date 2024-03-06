import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-shop-home-specials',
  templateUrl: './personal-shop-home-specials.component.html',
  styleUrls: ['./personal-shop-home-specials.component.scss']
})
export class PersonalShopHomeSpecialsComponent {
  selectedTab: string = 'Electronic';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
