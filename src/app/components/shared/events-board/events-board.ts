import { Component, Input } from '@angular/core';
import { pickBy, isNumber } from 'lodash';

import { EventStatus } from '../../../enums/event_statuses';

@Component({
  selector: 'app-events-board',
  templateUrl: './events-board.html',
})
export class EventsBoard {
  @Input() project: any = {};
  statuses = pickBy(EventStatus, isNumber);

  constructor() { }
}
