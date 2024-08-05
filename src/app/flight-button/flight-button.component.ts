import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../shared/classes/flight';

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

  constructor() { }

  addFlightToAircraftRotation() {
    console.log(this.flight);
    this.addFlight.emit(this.flight);
  }
}
