import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../shared/classes/flight';
import { Aircraft } from '../shared/classes/aircraft';
import { Constants } from '../shared/classes/constants';

@Component({
  selector: 'app-flight-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-button.component.html',
  styleUrl: './flight-button.component.sass'
})
export class FlightButtonComponent {
  @Output() addFlight = new EventEmitter<Flight>();

  @Input() flight!: Flight;
  @Input() selectedAircraft!: Aircraft;

  constructor() { }

  addFlightToAircraftRotation() {
    this.addFlight.emit(this.flight);
  }

  checkAirportMatchesBase(): boolean {
    // no airport matches the base from the aircrafts
    // so this function has been removed from the showRecommendedFlight function
    if(!this.selectedAircraft || !this.selectedAircraft.base) {
      return false;
    }

    if(this.selectedAircraft.hasFlights()) {
      return false;
    }

    return(this.selectedAircraft.base == this.flight.origin);
  }

  checkAirportMatchesLastFlight(): boolean {
    if(!this.selectedAircraft || !this.selectedAircraft.hasFlights()) {
      return true;
    }

    return(!!this.selectedAircraft.lastFlightInRotation && this.selectedAircraft.lastFlightInRotation.destination == this.flight.origin);
  }

  checkFlightHasDesiredInterval(): boolean {
    if(!this.selectedAircraft || !this.selectedAircraft.hasFlights()) {
      return true;
    }

    return(!!this.selectedAircraft.lastFlightInRotation && this.checkFlightIsAfterLast() && ((this.flight.departuretime - this.selectedAircraft.lastFlightInRotation.arrivaltime) > Constants.IntervalDuration));
  }

  checkFlightIsAfterLast(): boolean {
    if(!this.selectedAircraft || !this.selectedAircraft.hasFlights()) {
      return true;
    }

    return(!!this.selectedAircraft.lastFlightInRotation && (this.selectedAircraft.lastFlightInRotation.arrivaltime < this.flight.departuretime));
  }

  disableSelection(): boolean {
    return (!this.selectedAircraft || !this.checkAirportMatchesLastFlight() || !this.checkFlightHasDesiredInterval());
  }
}
