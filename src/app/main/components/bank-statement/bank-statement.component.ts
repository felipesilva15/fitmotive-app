import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { ProviderService } from 'src/app/main/service/provider.service';
import { Component } from '@angular/core';
import { FinancialTransaction } from '../../api/financial-transaction';
import { MovementTypeEnum } from '../../enum/movement-type-enum';
import { BankStatement } from '../../api/bank-statement';
import { WithdrawComponent } from '../withdraw/withdraw.component';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrl: './bank-statement.component.scss'
})
export class BankStatementComponent {
  data!: BankStatement;
  records!: FinancialTransaction[];
  isLoading: boolean = true;
  movementTypeEnum: MovementTypeEnum;

  constructor(private providerService: ProviderService, private customDynamicDialogService: CustomDynamicDialogService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.providerService.listFinancialTransactions().subscribe({
      next: (res: BankStatement) => {
        this.data = res;
        this.records = res.data;

        this.isLoading = false;

        console.log(this.isLoading, this.records.length)
      }
    });
  }

  openWithdrawDialog(): void {
    this.customDynamicDialogService.openDialog<boolean>(WithdrawComponent, 'Saque', this.data).then(
      (res: boolean) => {
        if (!res) {
          return;
        }

        this.loadData();
      }
    );
  }
}
