import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  goToExplorer() {
    this.router.navigateByUrl('/explorer');
  }

}
