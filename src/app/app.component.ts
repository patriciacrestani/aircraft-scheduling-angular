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
import { LocalStorageService } from './shared/services/local-storage.service';

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
    private localStorageService: LocalStorageService,
  ) {
    this.initialize();
  }

  initialize() {
    this.getFlightList();
    this.getAircraftList();
  }

  getAircraftList() {
    let count = -1;
    this.aircrafts = [];
    this.selectedAircraft = null;
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
          )
        });
        this.aircrafts = aircraftList;
        this.getRotationLocalStorage();
      },
      (error) => {

      }
    );
  }

  getFlightList() {
    let count: number = -1;
    let ident: number = 100;
    this.flights = [];
    this.flightService.getFlights().subscribe(
      (response: any[]) => {
        let flightList: Flight[] = response.map(r => {
          count++;
          return new Flight(
            r.id ? r.id : count,
            r.indent ? r.indent : `FL${ident++}`,
            r.departuretime,
            r.arrivaltime,
            r.origin,
            r.destination,
            r.readable_departure,
            r.readable_arrival
          )
        });
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
      true,
      aircraft.utilisation
    );
  }

  updateAircraft() {
    this.selectedAircraft = new Aircraft(
      this.selectedAircraft.id,
      this.selectedAircraft.ident,
      this.selectedAircraft.type,
      this.selectedAircraft.economySeats, 
      this.selectedAircraft.base, 
      this.selectedAircraft.flights, 
      this.selectedAircraft.selected,
      this.selectedAircraft.utilisation
    );
    let aircraftIndex = this.aircrafts.findIndex(aircraft => aircraft.id == this.selectedAircraft.id);
    if(aircraftIndex != -1) {
      this.aircrafts[aircraftIndex].flights = this.selectedAircraft.flights;
      this.aircrafts[aircraftIndex].utilisation = this.selectedAircraft.utilisation;
    }
  }

  addFlightBackToList(flight: Flight) {
    let flightIndex = this.flights.findIndex(f => f.id == flight.id);
    if(flightIndex != -1) {
      this.flights[flightIndex].selected = false;
    }
  }

  removeFlightFromList(flight: Flight) {
    let flightIndex = this.flights.findIndex(f => f.id == flight.id);
    if(flightIndex != -1) {
      this.flights[flightIndex].selected = true;
    }
  }

  addFlightToSelectedAircraft(flight: Flight) {
    if(!this.selectedAircraft) {
      return;
    }

    this.selectedAircraft.addFlightToRotation(flight);
    this.removeFlightFromList(flight);
    this.updateAircraft();
  }

  removeFlightFromRotation() {
    if(!this.selectedAircraft || !this.selectedAircraft.hasFlights() || !this.selectedAircraft.lastFlightInRotation) {
      return;
    }

    this.addFlightBackToList(this.selectedAircraft.lastFlightInRotation);
    this.selectedAircraft.removeFlightFromRotation();
    this.updateAircraft();
  }

  getLocalStorage() {
    return this.localStorageService.getSchedule();
  }

  saveLocalStorage() {
    this.localStorageService.saveSchedule(this.aircrafts);
  }

  clearLocalStorage() {
    this.localStorageService.removeSchedule();
    this.initialize();
  }

  getRotationLocalStorage() {
    let rotations: any[] = this.getLocalStorage();

    if(!rotations || rotations.length <= 0) {
      return;
    }
    rotations.map(r => {
      let aircraftIndex = this.aircrafts.findIndex(aircraft => aircraft.id == r.id);
      if(aircraftIndex != -1) {
        this.aircrafts[aircraftIndex].flights = r.flights;
        this.aircrafts[aircraftIndex].flights.forEach(f => {
          this.removeFlightFromList(f);
        });
      }
    });
  }
}
