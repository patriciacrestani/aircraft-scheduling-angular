export class Flight {
    id: number;
    ident: string;
    departuretime: number;
    arrivaltime: number;
    readable_departure: string;
    readable_arrival: string;
    origin: string;
    destination: string;

    constructor(id?: number, ident?: string, departuretime?: number, arrivaltime?: number, origin?: string, destination?: string) {
        this.id = (id ? id : 0);
        this.ident = (ident ? ident : "");
        this.departuretime = (departuretime ? departuretime : 0);
        this.arrivaltime = (arrivaltime ? arrivaltime : 0);
        this.origin = (origin ? origin : "");
        this.destination = (destination ? destination : "");
        this.readable_departure = "";
        this.readable_arrival = "";
    }

    setReadableTimes() {
        this.setReadableDeparture();
        this.setReadableArrival();
    }

    setReadableDeparture() {
        let hourDeparture = this.departuretime / 3600;
        this.readable_departure.concat(Math.trunc(hourDeparture).toString());
        this.readable_departure.concat(":");

        let minuteDeparture = (hourDeparture % 1) * 60;
        this.readable_departure.concat(Math.round(minuteDeparture).toString());
    }

    setReadableArrival() {
        let hourArrival = this.arrivaltime / 3600;
        this.readable_arrival.concat(Math.trunc(hourArrival).toString());
        this.readable_arrival.concat(":");

        let minuteArrival = (hourArrival % 1) * 60;
        this.readable_arrival.concat(Math.round(minuteArrival).toString());
    }
}