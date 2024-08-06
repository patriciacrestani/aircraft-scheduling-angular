import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aircraft } from '../shared/classes/aircraft';
import { Flight } from '../shared/classes/flight';

@Component({
  selector: 'app-rotation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rotation.component.html',
  styleUrl: './rotation.component.sass'
})
export class RotationComponent {
  @Output() removeFlight = new EventEmitter();
  
  @Input() aircraft!: Aircraft;

  tomorrow: Date;

  constructor() {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

  getDay(): string {
    switch(this.tomorrow.getDate()) {
      case 1:
        return "st";
      case 2: 
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  showNoAircraftSelected(): boolean {
    return (!this.aircraft);
  }

  showNoFlightsForAircraft(): boolean {
    return (this.aircraft && (!this.aircraft.flights || this.aircraft.flights.length <= 0));
  }

  showFlightsForAircraft(): boolean {
    return (this.aircraft && this.aircraft.flights && this.aircraft.flights.length > 0);
  }

  showRemoveButton(flight: Flight): boolean {
    if(!this.aircraft) {
      return false;
    }

    return(!!this.aircraft.lastFlightInRotation && this.aircraft.lastFlightInRotation.id == flight.id);
  }

  removeFlightFromRotation() {
    this.removeFlight.emit();
  }
}
