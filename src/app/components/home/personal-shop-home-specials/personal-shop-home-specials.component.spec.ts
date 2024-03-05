import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeSpecialsComponent } from './personal-shop-home-specials.component';

describe('PersonalShopHomeSpecialsComponent', () => {
  let component: PersonalShopHomeSpecialsComponent;
  let fixture: ComponentFixture<PersonalShopHomeSpecialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeSpecialsComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
