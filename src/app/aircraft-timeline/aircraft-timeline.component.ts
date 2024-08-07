import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Aircraft } from '../shared/classes/aircraft';
import { Timeline } from '../shared/classes/timeline';
import { CommonModule } from '@angular/common';
import { Flight } from '../shared/classes/flight';

@Component({
  selector: 'app-aircraft-timeline',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './aircraft-timeline.component.html',
  template:`
    <div class="timeline">
      <span class="timelineBase" title="Idle"></span>
      <ng-container *ngFor="let time of timeline">
        <span 
          class="timelineItem" 
          [ngClass]="{
            scheduled: time.utilised,
            turnaround : !time.utilised
          }"
          style="margin-left: {{ time.startTimeline }}%; width: {{ time.percentOfDay }}%;"
          title="{{getTitle(time)}}"
        ></span>
      </ng-container>
    </div>
  `,
  styleUrl: './aircraft-timeline.component.sass'
})
export class AircraftTimelineComponent implements OnChanges {
  @Input() aircraft!: Aircraft;
  @Input() flights!: Flight[];

  timeline: Timeline[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.createTimeline();
  }

  createTimeline() {
    this.timeline = [];

    if(!this.flights || this.flights.length <= 0) {
      return;
    }

    for (let flightIndex = 0; flightIndex < this.flights.length; flightIndex++) {
      this.timeline.push(
        new Timeline(
          this.flights[flightIndex].departuretime,
          this.flights[flightIndex].arrivaltime,
          true
        )
      );

      if(flightIndex < (this.flights.length - 1)) {
        this.timeline.push(
          new Timeline(
            this.flights[flightIndex].arrivaltime,
            this.flights[flightIndex + 1].departuretime,
            false
          )
        );
      }
    }
  }
  
  getTitle(timeline: Timeline): string {
    if(!timeline.utilised) {
      return "Turnaround time";
    }

    return `Flight from ${timeline.readable_initialTime} to ${timeline.readable_finalTime}`;
  }
}
