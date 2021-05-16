import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStateScreenComponent } from './add-state-screen.component';

describe('AddStateScreenComponent', () => {
  let component: AddStateScreenComponent;
  let fixture: ComponentFixture<AddStateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
