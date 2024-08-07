export class Flight {
    id: number;
    ident: string;
    departuretime: number;
    arrivaltime: number;
    readable_departure: string;
    readable_arrival: string;
    origin: string;
    destination: string;
    duration: number;
    readable_duration: string;
    selected: boolean;

    constructor(id?: number, ident?: string, departuretime?: number, arrivaltime?: number, origin?: string, destination?: string, readable_departure?: string, readable_arrival?: string) {
        this.id = (id ? id : 0);
        this.ident = (ident ? ident : "");
        this.departuretime = (departuretime ? departuretime : 0);
        this.arrivaltime = (arrivaltime ? arrivaltime : 0);
        this.origin = (origin ? origin : "");
        this.destination = (destination ? destination : "");
        this.readable_departure = (readable_departure ? readable_departure : "");
        this.readable_arrival = (readable_arrival ? readable_arrival : "");
        this.duration = 0;
        this.readable_duration = "";
        this.selected = false;
        this.setFlightDuration();
    }

    setFlightDuration() {
        this.duration = (this.arrivaltime - this.departuretime);
        
        let hourDuration = this.duration / 3600;

        this.readable_duration = this.readable_duration.concat(
            `${Math.trunc(hourDuration).toString()} ${(Math.trunc(hourDuration) == 1) ? "hour" : "hours"}`
        );

        let minuteDuration = (hourDuration % 1) * 60;
        
        if(minuteDuration == 0) {
            return;
        }

        this.readable_duration = this.readable_duration.concat(
            ` and ${Math.round(minuteDuration).toString()} minutes`
        );
    }
}