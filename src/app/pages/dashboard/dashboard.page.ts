import { Component, OnInit } from '@angular/core';
import { NomicsService } from '../../services/nomics.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dashboardData: Observable<any>;

  constructor(private nomics: NomicsService) { }

  ngOnInit() {
    this.dashboardData = this.nomics.getDashboardData()
  }

}
