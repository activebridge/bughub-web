import { Component } from '@angular/core';
import { isEmpty } from 'lodash';

import { EventService } from '../../../services';

@Component({
  selector: 'app-event-request-data',
  templateUrl: './event-request-data.html',
  styleUrls: ['./event-request-data.scss']
})

export class EventRequestData {
  isEmpty = isEmpty;
  constructor(public eventService: EventService) { }

  get isParamsPresent() {
    if (!this.eventService.event) { return false; }
    return this.eventService.event.params || this.eventService.event.http_method
      || this.eventService.event.url || this.eventService.event.ip_address;
  }

  get isExtraDataPresent() {
    return !this.isParamsPresent && !this.eventService.event.person_data &&
           !this.eventService.event.headers && !this.eventService.event.background_data;
  }
}
