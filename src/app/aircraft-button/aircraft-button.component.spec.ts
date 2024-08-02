import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftButtonComponent } from './aircraft-button.component';

describe('AircraftButtonComponent', () => {
  let component: AircraftButtonComponent;
  let fixture: ComponentFixture<AircraftButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircraftButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
