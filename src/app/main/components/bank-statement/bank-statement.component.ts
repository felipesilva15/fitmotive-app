import { ProviderService } from 'src/app/main/service/provider.service';
import { Component } from '@angular/core';
import { FinancialTransaction } from '../../api/financial-transaction';
import { MovementTypeEnum } from '../../enum/movement-type-enum';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrl: './bank-statement.component.scss'
})
export class BankStatementComponent {
  records!: FinancialTransaction[];
  isLoading: boolean = true;
  movementTypeEnum: MovementTypeEnum;

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.providerService.listFinancialTransactions().subscribe({
      next: (res: FinancialTransaction[]) => {
        this.records = res;

        this.isLoading = false;
      }
    });
  }
}
