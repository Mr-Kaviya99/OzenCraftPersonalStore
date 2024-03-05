import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeWeeklyDealComponent } from './personal-shop-home-weekly-deal.component';

describe('PersonalShopHomeWeeklyDealComponent', () => {
  let component: PersonalShopHomeWeeklyDealComponent;
  let fixture: ComponentFixture<PersonalShopHomeWeeklyDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeWeeklyDealComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeWeeklyDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
