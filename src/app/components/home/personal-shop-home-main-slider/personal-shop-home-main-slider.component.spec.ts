import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeMainSliderComponent } from './personal-shop-home-main-slider.component';

describe('PersonalShopHomeMainSliderComponent', () => {
  let component: PersonalShopHomeMainSliderComponent;
  let fixture: ComponentFixture<PersonalShopHomeMainSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeMainSliderComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
