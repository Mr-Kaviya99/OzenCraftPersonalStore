import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopMainFooterComponent } from './personal-shop-main-footer.component';

describe('PersonalShopMainFooterComponent', () => {
  let component: PersonalShopMainFooterComponent;
  let fixture: ComponentFixture<PersonalShopMainFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopMainFooterComponent]
    });
    fixture = TestBed.createComponent(PersonalShopMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
