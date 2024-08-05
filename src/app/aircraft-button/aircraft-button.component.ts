import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() selectedAircraft = new EventEmitter<Aircraft>();
  
  @Input() aircraft!: Aircraft;

  constructor() { }

  selectAircraft() {
    this.aircraft.selected = true;
    this.selectedAircraft.emit(this.aircraft);
  }
}
