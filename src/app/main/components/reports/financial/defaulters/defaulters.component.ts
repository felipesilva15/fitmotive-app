import { FinancialReportService } from './../../../../service/financial-report.service';
import { Component } from '@angular/core';
import { Defaulter } from 'src/app/main/api/defaulter';

@Component({
  selector: 'app-defaulters',
  templateUrl: './defaulters.component.html',
  styleUrl: './defaulters.component.scss'
})
export class DefaultersComponent {
  records: Defaulter[] = [];
  cols: any[] = [];
  isLoading: boolean = true;

  constructor(private financialReportService: FinancialReportService) { }

  ngOnInit() {
    this.financialReportService.list().subscribe({
      next: (data: Defaulter[]) => {
        this.records = data;

        this.records.forEach((record) => {
          record.last_charge_date = new Date(<Date>record.last_charge_date);
        });

        console.log(this.records);

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
