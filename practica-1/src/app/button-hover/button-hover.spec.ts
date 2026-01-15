import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHover } from './button-hover';

describe('ButtonHover', () => {
  let component: ButtonHover;
  let fixture: ComponentFixture<ButtonHover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
