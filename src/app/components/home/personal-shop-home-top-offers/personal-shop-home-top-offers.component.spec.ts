import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeTopOffersComponent } from './personal-shop-home-top-offers.component';

describe('PersonalShopHomeTopOffersComponent', () => {
  let component: PersonalShopHomeTopOffersComponent;
  let fixture: ComponentFixture<PersonalShopHomeTopOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeTopOffersComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeTopOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
