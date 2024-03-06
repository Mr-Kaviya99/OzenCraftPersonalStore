import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeSubscriptionComponent } from './personal-shop-home-subscription.component';

describe('PersonalShopHomeSubscriptionComponent', () => {
  let component: PersonalShopHomeSubscriptionComponent;
  let fixture: ComponentFixture<PersonalShopHomeSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeSubscriptionComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
