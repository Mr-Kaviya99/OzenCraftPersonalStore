import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopMainHeaderComponent } from './personal-shop-main-header.component';

describe('PersonalShopMainHeaderComponent', () => {
  let component: PersonalShopMainHeaderComponent;
  let fixture: ComponentFixture<PersonalShopMainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopMainHeaderComponent]
    });
    fixture = TestBed.createComponent(PersonalShopMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
