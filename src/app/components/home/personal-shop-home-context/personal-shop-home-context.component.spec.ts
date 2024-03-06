import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopHomeContextComponent } from './personal-shop-home-context.component';

describe('PersonalShopHomeContextComponent', () => {
  let component: PersonalShopHomeContextComponent;
  let fixture: ComponentFixture<PersonalShopHomeContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalShopHomeContextComponent]
    });
    fixture = TestBed.createComponent(PersonalShopHomeContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
