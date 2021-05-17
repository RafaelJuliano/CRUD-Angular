import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStateScreenComponent } from './remove-state-screen.component';

describe('RemoveStateScreenComponent', () => {
  let component: RemoveStateScreenComponent;
  let fixture: ComponentFixture<RemoveStateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
