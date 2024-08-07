import { Constants } from "./constants";
import { Flight } from "./flight";

export class Aircraft {
    id: number;
    ident: string;
    type: string;
    economySeats: number;
    base: string;
    utilisation: number;
    flights: Flight[];
    selected: boolean;

    constructor(id?: number, ident?: string, type?: string, economySeats?: number, base?: string, flights?: Flight[], selected?: boolean, utilisation?: number) {
        this.id = (id ? id : 0);
        this.ident = (ident ? ident : "");
        this.type = (type ? type : "");
        this.economySeats = (economySeats ? economySeats : 0);
        this.base = (base ? base : "");
        this.flights = (flights ? flights : []);
        this.selected = false;
        this.utilisation = 0;
        this.calcUtilisation();
    }

    get lastFlightInRotation(): Flight | void {
        if(!this.hasFlights()) {
            return;
        }

        return this.flights[this.flights.length - 1];
    }

    public hasFlights(): boolean {
        return (this.flights && this.flights.length > 0);
    }

    public checkFlightAlreadyAddedToRotation(flightId: number): boolean {
        if(!this.hasFlights()) {
            return false;
        }

        let returnValue: boolean = false;

        this.flights.forEach(flight => {
            if(flight.id == flightId) {
                returnValue = true;
            }
        });

        return returnValue;
    }

    public addFlightToRotation(flight: Flight) {
        if(this.checkFlightAlreadyAddedToRotation(flight.id)) {
            return;
        }

        if(!this.flights) {
            this.flights = [];
        }
        
        this.flights.push(flight);
        this.calcUtilisation();
    }

    public removeFlightFromRotation() {
        if(!this.flights) {
            this.flights = [];
        }
        this.flights.pop();
        this.calcUtilisation();
    }

    getTotalFlightsTime(): number {
        if(!this.flights || this.flights.length <= 0) {
            return 0;
        }

        let flightTime: number = 0;

        this.flights.forEach(flight => {
            flightTime += flight.duration;
        });

        return Math.round(flightTime);
    }

    calcUtilisation() {
        if(!this.hasFlights()) {
            return;
        }
        const flightTime: number = this.getTotalFlightsTime();
        this.utilisation = Math.round(((flightTime * 100)/Constants.SecondsInDay));
    }
}