import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Dashboard } from '../../api/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = false;
  data!: Dashboard;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.dashboardService.list().subscribe({
      next: (res: Dashboard) => {
        this.data = res;
        this.isLoading = false
      }
    });
  }
}
