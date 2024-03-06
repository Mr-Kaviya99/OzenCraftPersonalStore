import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeSaleBannerComponent } from './personal-shop-home-sale-banner.component';

describe('PersonalShopHomeSaleBannerComponent', () => {
  let component: PersonalShopHomeSaleBannerComponent;
  let fixture: ComponentFixture<PersonalShopHomeSaleBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeSaleBannerComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeSaleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
