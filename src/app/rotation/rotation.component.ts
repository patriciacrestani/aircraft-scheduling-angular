import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aircraft } from '../shared/classes/aircraft';

@Component({
  selector: 'app-rotation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rotation.component.html',
  styleUrl: './rotation.component.sass'
})
export class RotationComponent {
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
}
