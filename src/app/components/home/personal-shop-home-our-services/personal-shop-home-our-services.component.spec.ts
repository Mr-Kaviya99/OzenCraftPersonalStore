import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeOurServicesComponent } from './personal-shop-home-our-services.component';

describe('PersonalShopHomeOurServicesComponent', () => {
  let component: PersonalShopHomeOurServicesComponent;
  let fixture: ComponentFixture<PersonalShopHomeOurServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeOurServicesComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
