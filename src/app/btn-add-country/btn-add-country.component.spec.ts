import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddCountryComponent } from './btn-add-country.component';

describe('BtnAddCountryComponent', () => {
  let component: BtnAddCountryComponent;
  let fixture: ComponentFixture<BtnAddCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
