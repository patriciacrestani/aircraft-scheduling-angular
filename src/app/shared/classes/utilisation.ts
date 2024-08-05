export class Utilisation {
    hour: number;
    utilised: boolean;

    constructor(hour?: number, utilised?: boolean) {
        this.hour = (hour ? hour : 0);
        this.utilised = (utilised ? utilised : false);
    }
}