import { Component, Input } from '@angular/core';
import { Aircraft } from '../shared/classes/aircraft';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aircraft-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aircraft-button.component.html',
  styleUrl: './aircraft-button.component.sass'
})
export class AircraftButtonComponent {
  @Input() aircraft: Aircraft;

  constructor() {
    this.aircraft = new Aircraft();
  }
}
