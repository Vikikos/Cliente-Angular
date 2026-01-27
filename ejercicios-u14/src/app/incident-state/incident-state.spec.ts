import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentState } from './incident-state';

describe('IncidentState', () => {
  let component: IncidentState;
  let fixture: ComponentFixture<IncidentState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
