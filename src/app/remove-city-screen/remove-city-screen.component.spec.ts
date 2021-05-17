import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCityScreenComponent } from './remove-city-screen.component';

describe('RemoveCityScreenComponent', () => {
  let component: RemoveCityScreenComponent;
  let fixture: ComponentFixture<RemoveCityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
