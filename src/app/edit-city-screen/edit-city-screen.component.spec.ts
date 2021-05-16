import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCityScreenComponent } from './edit-city-screen.component';

describe('EditCityScreenComponent', () => {
  let component: EditCityScreenComponent;
  let fixture: ComponentFixture<EditCityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
