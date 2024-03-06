import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopStoreFiltersComponent } from './personal-shop-store-filters.component';

describe('PersonalShopStoreFiltersComponent', () => {
  let component: PersonalShopStoreFiltersComponent;
  let fixture: ComponentFixture<PersonalShopStoreFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopStoreFiltersComponent]
    });
    fixture = TestBed.createComponent(PersonalShopStoreFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
