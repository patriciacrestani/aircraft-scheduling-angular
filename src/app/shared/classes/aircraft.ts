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

    constructor(id?: number, ident?: string, type?: string, economySeats?: number, base?: string, flights?: Flight[], selected?: boolean) {
        this.id = (id ? id : 0);
        this.ident = (ident ? ident : "");
        this.type = (type ? type : "");
        this.economySeats = (economySeats ? economySeats : 0);
        this.base = (base ? base : "");
        this.utilisation = 0;
        this.flights = [];
        this.selected = false;
    }

    getTotalFlightsTime(): number {
        if(!this.flights || this.flights.length <= 0) {
            return 0;
        }

        let flightTime: number = 0;

        this.flights.forEach(flight => {
            flightTime += flight.getFlightDuration();
        });

        return flightTime;
    }

    calcUtilisation() {
        const secondsInDay: number = 96400; 
        const flightTime: number = this.getTotalFlightsTime();
        this.utilisation = ((flightTime * 100)/secondsInDay);
    }

    chekAircraftBeingUsed(time: string): boolean {
        return false;
        // if(!this.flights || this.flights.length <= 0) {
        //     return false;
        // }

        // this.flights.forEach(flight => {
        //     flightTime += flight.getFlightDuration();
        // });

    }
}