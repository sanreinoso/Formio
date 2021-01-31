import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupaButtonComponent } from './lupa-button.component';

describe('LupaButtonComponent', () => {
  let component: LupaButtonComponent;
  let fixture: ComponentFixture<LupaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LupaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LupaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
