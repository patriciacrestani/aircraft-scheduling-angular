import { Flight } from "./flight";

export class Aircraft {
    id: number;
    ident: string;
    type: string;
    economySeats: number;
    base: string;
    utilisation: number;
    flights: Flight[];

    constructor(id?: number, ident?: string, type?: string, economySeats?: number, base?: string, flights?: Flight[]) {
        this.id = (id ? id : 0);
        this.ident = (ident ? ident : "");
        this.type = (type ? type : "");
        this.economySeats = (economySeats ? economySeats : 0);
        this.base = (base ? base : "");
        this.utilisation = 0;
        this.flights = [];
    }
}