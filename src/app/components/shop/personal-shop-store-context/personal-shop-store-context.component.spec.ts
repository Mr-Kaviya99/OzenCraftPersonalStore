import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopStoreContextComponent } from './personal-shop-store-context.component';

describe('PersonalShopStoreContextComponent', () => {
  let component: PersonalShopStoreContextComponent;
  let fixture: ComponentFixture<PersonalShopStoreContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopStoreContextComponent]
    });
    fixture = TestBed.createComponent(PersonalShopStoreContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
