export class Aircraft {
    ident: string;
    type: string;
    economySeats: number;
    base: string;
    utilisation: number;

    constructor(ident?: string, type?: string, economySeats?: number, base?: string) {
        this.ident = (ident ? ident : "");
        this.type = (type ? type : "");
        this.economySeats = (economySeats ? economySeats : 0);
        this.base = (base ? base : "");
        this.utilisation = 0;
    }
}