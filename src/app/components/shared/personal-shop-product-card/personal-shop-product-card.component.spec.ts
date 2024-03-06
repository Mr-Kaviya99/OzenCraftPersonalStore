import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopProductCardComponent } from './personal-shop-product-card.component';

describe('PersonalShopProductCardComponent', () => {
  let component: PersonalShopProductCardComponent;
  let fixture: ComponentFixture<PersonalShopProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopProductCardComponent]
    });
    fixture = TestBed.createComponent(PersonalShopProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
