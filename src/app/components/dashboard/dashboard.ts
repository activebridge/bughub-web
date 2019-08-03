import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})

export class Dashboard implements OnInit {
  activities: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getActivities();
  }

  private getActivities() {
    this.query().subscribe(
      (resp) => {
      this.activities = resp;
      }),
      (error) => {
      console.log(error);
      }
  }

  private query() {
    return this.http.get(`${environment.apiEndpoint}/api/v1/activities`);
  }
}
