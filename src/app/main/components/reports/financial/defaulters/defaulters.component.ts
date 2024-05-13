import { FinancialReportService } from './../../../../service/financial-report.service';
import { Component } from '@angular/core';
import { Defaulter } from 'src/app/main/api/defaulter';
import { PaymentMethodTypeEnum, PaymentMethodTypeEnumLabels } from 'src/app/main/enum/payment-method-type-enum';

@Component({
  selector: 'app-defaulters',
  templateUrl: './defaulters.component.html',
  styleUrl: './defaulters.component.scss'
})
export class DefaultersComponent {
  records: Defaulter[] = [];
  cols: any[] = [];
  isLoading: boolean = true;
  paymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;

  constructor(private financialReportService: FinancialReportService) { }

  ngOnInit() {
    this.financialReportService.listDefaulters().subscribe({
      next: (data: Defaulter[]) => {
        this.records = data;

        this.isLoading = false;
      }
    });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'user.name', header: 'Paciente' },
      { field: 'user.cpf_cnpj', header: 'CPF' },
      { field: 'last_charge_date', header: 'DtUltimaCobranca' },
      { field: 'total_amount_owed', header: 'VlTotalDevedor' },
      { field: 'quantity_total_charges', header: 'QtdTotalCobrancas' }
    ];
  }
}
