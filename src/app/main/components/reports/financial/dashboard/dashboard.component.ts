import { FinancialReportService } from './../../../../service/financial-report.service';
import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { FinancialDashboard } from 'src/app/main/api/financial-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = false;
  data!: FinancialDashboard;
  profitChartData!: ChartData;
  profitChartOptions!: any;
  patientsChartData!: ChartData;
  patientsChartOptions!: any;
  documentStyle!: CSSStyleDeclaration
  textColor!: string;
  surfaceBorder!: string;
  textColorSecondary!: string;

  constructor(private financialReportService: FinancialReportService) { }

  ngOnInit(): void {
    this.documentStyle = getComputedStyle(document.documentElement);
    this.textColor = this.documentStyle.getPropertyValue('--text-color');
    this.textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    this.surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

    this.isLoading = true;

    this.financialReportService.listDashboard().subscribe({
      next: (res: FinancialDashboard) => {
        this.data = res;
        this.isLoading = false
      }
    });
  }
}
