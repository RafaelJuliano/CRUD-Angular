import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityScreenComponent } from './add-city-screen.component';

describe('AddCityScreenComponent', () => {
  let component: AddCityScreenComponent;
  let fixture: ComponentFixture<AddCityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
