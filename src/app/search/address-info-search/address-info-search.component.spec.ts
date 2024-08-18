import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoSearchComponent } from './address-info-search.component';

describe('AddressInfoSearchComponent', () => {
  let component: AddressInfoSearchComponent;
  let fixture: ComponentFixture<AddressInfoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressInfoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressInfoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
