import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryScreenComponent } from './add-country-screen.component';

describe('AddCountryScreenComponent', () => {
  let component: AddCountryScreenComponent;
  let fixture: ComponentFixture<AddCountryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCountryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
