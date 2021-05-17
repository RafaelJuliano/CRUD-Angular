import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCountryScreenComponent } from './remove-country-screen.component';

describe('RemoveCountryScreenComponent', () => {
  let component: RemoveCountryScreenComponent;
  let fixture: ComponentFixture<RemoveCountryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCountryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCountryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
