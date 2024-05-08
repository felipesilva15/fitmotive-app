import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Dashboard } from '../../api/dashboard';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = false;
  data!: Dashboard;
  profitChartData!: ChartData;
  profitChartOptions!: any;
  documentStyle!: CSSStyleDeclaration
  textColor!: any;


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.documentStyle = getComputedStyle(document.documentElement);
    this.textColor = this.documentStyle.getPropertyValue('--text-color');

    this.isLoading = true;

    this.dashboardService.list().subscribe({
      next: (res: Dashboard) => {
        this.data = res;
        this.isLoading = false

        this.initCharts();
      }
    });
  }

  initCharts(): void {
    this.initProfitChart();
  }

  initProfitChart(): void {
    this.profitChartData = {
      labels: ['Recebido', 'Em aberto'],
      datasets: [
        {
          data: [this.data.monthly_profit.amount, this.data.monthly_profit.pending],
          backgroundColor: [this.documentStyle.getPropertyValue('--green-500'), this.documentStyle.getPropertyValue('--gray-500')],
          hoverBackgroundColor: [this.documentStyle.getPropertyValue('--green-400'), this.documentStyle.getPropertyValue('--gray-400')],
        }
      ]
    }

    this.profitChartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: this.textColor
          }
        }
      }
    };
  }
}
