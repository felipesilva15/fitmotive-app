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
  patientsChartData!: ChartData;
  patientsChartOptions!: any;
  documentStyle!: CSSStyleDeclaration
  textColor!: string;
  surfaceBorder!: string;
  textColorSecondary!: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.documentStyle = getComputedStyle(document.documentElement);
    this.textColor = this.documentStyle.getPropertyValue('--text-color');
    this.textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    this.surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

    this.isLoading = true;

    this.dashboardService.list().subscribe({
      next: (res: Dashboard) => {
        this.data = res;
        this.isLoading = false;

        this.initCharts();
      }
    });
  }

  initCharts(): void {
    this.initProfitChart();
    this.initPatientsChart();
  }

  initProfitChart(): void {
    this.profitChartData = {
      labels: ['Recebido', 'Em aberto'],
      datasets: [
        {
          data: [this.data.monthly_profit.amount, this.data.monthly_profit.pending],
          backgroundColor: [this.documentStyle.getPropertyValue('--green-500'), this.documentStyle.getPropertyValue('--bluegray-700')],
          hoverBackgroundColor: [this.documentStyle.getPropertyValue('--green-400'), this.documentStyle.getPropertyValue('--bluegray-600')],
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

  initPatientsChart(): void {
    this.patientsChartData = {
      labels: this.data.patients?.overview_chart_data?.months,
      datasets: [
        {
          label: 'Total',
          data: this.data.patients?.overview_chart_data?.total,
          fill: false,
          backgroundColor: this.documentStyle.getPropertyValue('--bluegray-700'),
          borderColor: this.documentStyle.getPropertyValue('--bluegray-700'),
          tension: .4
        },
        {
          label: 'Novos',
          data: this.data.patients?.overview_chart_data?.new,
          fill: false,
          backgroundColor: this.documentStyle.getPropertyValue('--green-600'),
          borderColor: this.documentStyle.getPropertyValue('--green-600'),
          tension: .4
        }
      ]
    }

    this.patientsChartOptions = {
      plugins: {
        legend: {
            labels: {
                color: this.textColor
            }
        }
      },
      scales: {
        x: {
          ticks: {
              color: this.textColorSecondary
          },
          grid: {
              color: this.surfaceBorder,
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: this.textColorSecondary
          },
          grid: {
              color: this.surfaceBorder,
              drawBorder: false
          }
        }
      }
    };
  }
}
