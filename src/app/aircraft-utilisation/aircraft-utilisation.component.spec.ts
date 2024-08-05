import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftUtilisationComponent } from './aircraft-utilisation.component';

describe('AircraftUtilisationComponent', () => {
  let component: AircraftUtilisationComponent;
  let fixture: ComponentFixture<AircraftUtilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftUtilisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircraftUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
