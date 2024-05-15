import { ProviderService } from 'src/app/main/service/provider.service';
import { Component } from '@angular/core';
import { FinancialTransaction } from '../../api/financial-transaction';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrl: './bank-statement.component.scss'
})
export class BankStatementComponent {
  records!: FinancialTransaction[];

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.listFinancialTransactions().subscribe({
      next: (res: FinancialTransaction[]) => {
        this.records = res;

        console.log(this.records);
      }
    });
  }
}
