import { Component, Input } from '@angular/core';
import { Aircraft } from '../shared/classes/aircraft';
import { Utilisation } from '../shared/classes/utilisation';

@Component({
  selector: 'app-aircraft-utilisation',
  standalone: true,
  imports: [],
  templateUrl: './aircraft-utilisation.component.html',
  styleUrl: './aircraft-utilisation.component.sass'
})
export class AircraftUtilisationComponent {
  @Input() aircraft!: Aircraft;

  utilisationHours: Utilisation[] = [];

  constructor() {
    this.createUtilisaitonHours();
  }

  createUtilisaitonHours() {
    for (let hour = 1; hour <= 12; hour++) {
      this.utilisationHours.push(
        new Utilisation(
          hour,

        )
      );
      
    }
  }
}
