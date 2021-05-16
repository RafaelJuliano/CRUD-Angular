import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStateScreenComponent } from './edit-state-screen.component';

describe('EditStateScreenComponent', () => {
  let component: EditStateScreenComponent;
  let fixture: ComponentFixture<EditStateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
