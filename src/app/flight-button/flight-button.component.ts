import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Flight } from '../shared/classes/flight';

@Component({
  selector: 'app-flight-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-button.component.html',
  styleUrl: './flight-button.component.sass'
})
export class FlightButtonComponent {
  flight: Flight;

  constructor() {
    this.flight = new Flight();
  }
}
