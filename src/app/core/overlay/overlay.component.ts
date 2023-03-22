import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService, Events } from '../services/event-bus.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  httpRequestSub: Subscription = {} as Subscription;
  httpResponseSub: Subscription = {} as Subscription;
  enabled = false;
  queue: any[] = [];
  timerId: number = 0;
  timerHideId: number = 0;

  @Input() delay = 500;

  constructor(private eventBusService: EventBusService) {

  }

  ngOnInit(): void {
    // Handle request
    this.httpRequestSub = this.eventBusService.on(Events.httpRequest, (() => {
      this.queue.push({});
      if (this.queue.length === 1) {
        // Only show if we have an item in the queue after the delay time
        setTimeout(() => {
          if (this.queue.length) { this.enabled = true; }
        }, this.delay);
      }
    }));

    // Handle response
    this.httpResponseSub = this.eventBusService.on(Events.httpResponse, (() => {
      this.queue.pop();
      if (this.queue.length === 0) {
        // Since we don't know if another XHR request will be made, pause before
        // hiding the overlay. If another XHR request comes in then the overlay
        // will stay visible which prevents a flicker
        setTimeout(() => {
          // Make sure queue is still 0 since a new XHR request may have come in
          // while timer was running
          if (this.queue.length === 0) { this.enabled = false; }
        }, this.delay);
      }
    }));
  }

  ngOnDestroy() {
    this.httpRequestSub.unsubscribe();
    this.httpResponseSub.unsubscribe();
  }
}
