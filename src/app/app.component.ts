import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AircraftButtonComponent } from './aircraft-button/aircraft-button.component';
import { FlightButtonComponent } from './flight-button/flight-button.component';
import { FlightService } from './shared/services/flight.service';
import { HttpClientModule } from '@angular/common/http';
import { AircraftService } from './shared/services/aircraft.service';
import { Aircraft } from './shared/classes/aircraft';
import { Flight } from './shared/classes/flight';
import { RotationComponent } from './rotation/rotation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, AircraftButtonComponent, FlightButtonComponent, RotationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  aircrafts: Aircraft[] = [];
  flights: Flight[] = [];
  selectedAircraft!: Aircraft;
  
  constructor(
    private flightService: FlightService,
    private aircraftService: AircraftService,
  ) {
    this.getFlightList();
    this.getAircraftList();
  }

  getAircraftList() {
    let count = -1;
    this.aircraftService.getAircrafts().subscribe(
      (response: any[]) => {
        let aircraftList: Aircraft[] = response.map(r => {
          count++;
          return new Aircraft(
            r.id ? r.id : count,
            r.ident,
            r.type,
            r.economySeats,
            r.base,
            r.utilisation
          )
        });
        console.log(aircraftList);
        this.aircrafts = aircraftList;
      },
      (error) => {

      }
    );
  }

  getFlightList() {
    let count = -1;
    this.flightService.getFlights().subscribe(
      (response: any[]) => {
        let flightList: Flight[] = response.map(r => {
          count++;
          return new Flight(
            r.id ? r.id : count,
            r.indent,
            r.departuretime,
            r.arrivaltime,
            r.origin,
            r.destination,
            r.readable_departure,
            r.readable_arrival
          )
        });
        console.log(flightList);
        this.flights = flightList;
      },
      (error) => {

      }
    );
  }

  desselectOtherAircrafts(selectedId: number){
    if(!this.aircrafts || this.aircrafts.length <= 0) {
      return;
    }

    this.aircrafts.forEach(aircraft => {
      if(aircraft.id != selectedId) {
        aircraft.selected = false;
      }
    });
  }

  setSelectedAircraft(aircraft: Aircraft) {
    this.desselectOtherAircrafts(aircraft.id);
    this.selectedAircraft = aircraft;
    this.selectedAircraft = new Aircraft(
      aircraft.id,
      aircraft.ident,
      aircraft.type,
      aircraft.economySeats, 
      aircraft.base, 
      aircraft.flights, 
      true
    )
    console.log(aircraft);
    console.log(this.selectedAircraft);
  }

  addFlightToSelectedAircraft(flight: Flight) {
    if(!this.selectedAircraft) {
      return;
    }

    if(this.selectedAircraft.checkFlightAlreadyAddedToRotation(flight.id)) {
      return;
    }

    this.selectedAircraft.addFlightToRotation(flight);
  }
}
