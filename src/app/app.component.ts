import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideListComponent } from "./side-list/side-list.component";
import { AircraftButtonComponent } from './aircraft-button/aircraft-button.component';
import { FlightButtonComponent } from './flight-button/flight-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideListComponent, AircraftButtonComponent, FlightButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'aircraft-scheduling-angular';
}
