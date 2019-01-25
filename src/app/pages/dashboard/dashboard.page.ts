import { Component, OnInit } from '@angular/core';
import { NomicsService } from '../../services/nomics.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dashboardData: Observable<any>;
  showSpinner: boolean = true;

  constructor(private nomics: NomicsService, private router: Router) { }

  ngOnInit() {
    this.dashboardData = this.nomics.getDashboardData()
    this.dashboardData.subscribe(() => this.showSpinner = false);
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }
}
