import { FinancialReportService } from './../../../../service/financial-report.service';
import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { FinancialDashboard } from 'src/app/main/api/financial-dashboard';
import { PaymentMethodTypeEnum, PaymentMethodTypeEnumLabels } from 'src/app/main/enum/payment-method-type-enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLoading: boolean = false;
  data!: FinancialDashboard;
  inOutChartData!: ChartData;
  inOutChartOptions!: any;
  paymentMethodsMostUsedChartData!: ChartData;
  paymentMethodsMostUsedChartOptions!: any;
  documentStyle!: CSSStyleDeclaration
  textColor!: string;
  surfaceBorder!: string;
  textColorSecondary!: string;
  paymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;

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

        this.initCharts();

        this.isLoading = false
      }
    });
  }

  initCharts(): void { 
    this.initInOutChart();
    this.initMostUsedPaymentMethodsChart();
  }

  initInOutChart(): void {
    this.inOutChartData = {
      labels: this.data.in_out_chart_data?.months,
      datasets: [
        {
          label: 'Entradas',
          backgroundColor: this.documentStyle.getPropertyValue('--green-600'),
          borderColor: this.documentStyle.getPropertyValue('--green-600'),
          data: this.data.in_out_chart_data?.inflows
        },
        {
          label: 'Saídas',
          backgroundColor: this.documentStyle.getPropertyValue('--red-600'),
          borderColor: this.documentStyle.getPropertyValue('--red-600'),
          data: this.data.in_out_chart_data?.outflows
        }
      ]
    };

    this.inOutChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
            color: this.textColorSecondary,
            font: {
              weight: 500
            }
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

  initMostUsedPaymentMethodsChart(): void {
    let colors = [
      'blue',
      'yellow',
      'green', 
      'gray'
    ];

    let paymentMethods = this.data.payment_methods_most_used?.payment_methods.map((paymentMethod: PaymentMethodTypeEnum, index: number) => {
      
      return this.paymentMethodTypeEnumLabels[paymentMethod];
    });

    this.paymentMethodsMostUsedChartData = {
      labels: paymentMethods,
      datasets: [
        {
          data: this.data.payment_methods_most_used?.count,
          backgroundColor: colors.map((color: string) => { return this.documentStyle.getPropertyValue(`--${color}-600`)}),
          hoverBackgroundColor: colors.map((color: string) => { return this.documentStyle.getPropertyValue(`--${color}-500`)}),
        }
      ]
    };

    this.paymentMethodsMostUsedChartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: this.textColor
          }
        }
      }
    };;
  }
}
