import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopStoreProductsComponent } from './personal-shop-store-products.component';

describe('PersonalShopStoreProductsComponent', () => {
  let component: PersonalShopStoreProductsComponent;
  let fixture: ComponentFixture<PersonalShopStoreProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopStoreProductsComponent]
    });
    fixture = TestBed.createComponent(PersonalShopStoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
