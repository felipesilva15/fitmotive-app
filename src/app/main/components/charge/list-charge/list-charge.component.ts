import { Component } from '@angular/core';
import { Charge } from 'src/app/main/api/charge';
import { PaymentMethodTypeEnum, PaymentMethodTypeEnumLabels } from 'src/app/main/enum/payment-method-type-enum';
import { PaymentStatusEnum, PaymentStatusEnumLabels } from 'src/app/main/enum/payment-status-enum';
import { ProviderService } from 'src/app/main/service/provider.service';

@Component({
  selector: 'app-list-charge',
  templateUrl: './list-charge.component.html',
  styleUrl: './list-charge.component.scss'
})
export class ListChargeComponent {
  records: Charge[] = [];
  selectedRecords: Charge[] = [];
  cols: any[] = [];
  isLoading: boolean = true;
  paymentStatusEnumLabels: Record<PaymentStatusEnum, string> = PaymentStatusEnumLabels;
  PaymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.listCharges().subscribe({
      next: (data: Charge[]) => {
        this.records = data;

        this.records.forEach((record) => {
          record.due_date = new Date(<Date>record.due_date);
          record.paid_at = record.paid_at ? new Date(<Date>record.paid_at) : null;
        });

        this.isLoading = false;
      }
    });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'service_prive', header: 'Servico' },
      { field: 'cpf_cnpj', header: 'CpfCnpj' },
      { field: 'birth_date', header: 'DtAniversario' }
    ];
  }

  getPaymentStatusSeverity(status: string): string {
    switch (status) {
      case PaymentStatusEnum.Paid:
        return 'success';

      case PaymentStatusEnum.Authorized:
        return 'success';

      case PaymentStatusEnum.Canceled:
        return 'danger';
      
      case PaymentStatusEnum.Declined:
        return 'danger';

      case PaymentStatusEnum.InAnalysis:
        return null;

      case PaymentStatusEnum.Waiting:
        return null;

      default:
        return null
    }
  }
}
