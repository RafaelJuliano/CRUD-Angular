import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountryScreenComponent } from './edit-country-screen.component';

describe('EditCountryScreenComponent', () => {
  let component: EditCountryScreenComponent;
  let fixture: ComponentFixture<EditCountryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCountryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
