import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aircraft } from '../shared/classes/aircraft';

@Component({
  selector: 'app-aircraft-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aircraft-button.component.html',
  styleUrl: './aircraft-button.component.sass'
})
export class AircraftButtonComponent {
  @Input()
  aircraft!: Aircraft;

  constructor() {
  }
}
