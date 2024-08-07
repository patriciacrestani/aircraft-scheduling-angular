import { Constants } from "./constants";

export class Timeline {
    initialSecond: number;
    finalSecond: number;
    utilised: boolean;
    percentOfDay: number;
    startTimeline: number;
    endTimeline: number;

    constructor(initialSecond?: number, finalSecond?: number, utilised?: boolean) {
        this.initialSecond = (initialSecond ? initialSecond : 0);
        this.finalSecond = (finalSecond ? finalSecond : 0);
        this.utilised = (utilised ? utilised : false);
        this.percentOfDay = 0;
        this.startTimeline = 0;
        this.endTimeline = 0;
        this.fillPercentDay();
    }

    fillPercentDay() {
        this.startTimeline = (this.initialSecond * 100) / Constants.SecondsInDay;
        this.endTimeline = (this.finalSecond * 100) / Constants.SecondsInDay;
        this.percentOfDay = this.endTimeline - this.startTimeline;
    }

    get readable_initialTime(): string {
        const hour = this.initialSecond / Constants.SecondsInHour;
        const minutes = (hour % 1) * 60;
        return `${Math.trunc(hour)}:${Math.trunc(minutes)}`
    }

    get readable_finalTime(): string {
        const hour = this.finalSecond / Constants.SecondsInHour;
        const minutes = (hour % 1) * 60;
        return `${Math.trunc(hour)}:${Math.trunc(minutes)}`
    }
}