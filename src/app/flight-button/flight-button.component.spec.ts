import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightButtonComponent } from './flight-button.component';

describe('FlightButtonComponent', () => {
  let component: FlightButtonComponent;
  let fixture: ComponentFixture<FlightButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
