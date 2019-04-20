import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pickBy, isNumber } from 'lodash';

import { EventStatus } from '../../enums/event_statuses';

@Component({
  selector: 'app-project-events',
  templateUrl: './project-events.html',
})
export class ProjectEvents implements OnInit {
  projectId: any = {};
  statuses = pickBy(EventStatus, isNumber);

  constructor(private router: ActivatedRoute,) { }

  ngOnInit() {
    this.router.parent.params.subscribe(params => {
      if (params.id) {
        this.projectId = params.id;
      }
    });
  }
}