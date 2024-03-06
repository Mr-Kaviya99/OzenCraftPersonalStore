import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeTopProductsComponent } from './personal-shop-home-top-products.component';

describe('PersonalShopHomeTopProductsComponent', () => {
  let component: PersonalShopHomeTopProductsComponent;
  let fixture: ComponentFixture<PersonalShopHomeTopProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeTopProductsComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
