import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;

    setTimeout(
      () => {
        this.isLoading = false
      }, 1500
    );
  }
}
