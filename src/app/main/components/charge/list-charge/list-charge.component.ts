import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Charge } from 'src/app/main/api/charge';
import { ChargeLink } from 'src/app/main/api/charge-link';
import { PaymentMethodTypeEnum, PaymentMethodTypeEnumLabels } from 'src/app/main/enum/payment-method-type-enum';
import { PaymentStatusEnum, PaymentStatusEnumLabels } from 'src/app/main/enum/payment-status-enum';
import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { ProviderService } from 'src/app/main/service/provider.service';
import { LinksComponent } from '../links/links.component';
import { PagseguroChargeService } from 'src/app/main/service/pagseguro-charge.service';
import { QrCode } from 'src/app/main/api/qr-code';
import { QrCodeComponent } from '../../qr-code/qr-code.component';

@Component({
  selector: 'app-list-charge',
  templateUrl: './list-charge.component.html',
  styleUrl: './list-charge.component.scss'
})
export class ListChargeComponent {
  records: Charge[] = [];
  selectedRecords: Charge[] = [];
  selectedRecord!: Charge;
  cols: any[] = [];
  isLoading: boolean = true;
  paymentStatusEnumLabels: Record<PaymentStatusEnum, string> = PaymentStatusEnumLabels;
  PaymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;
  recordMenuItems!: MenuItem[];
  @ViewChild('recordMenu') recordMenu: Menu;

  constructor(private providerService: ProviderService, private customDynamicDialogService: CustomDynamicDialogService, private pagseguroChargeService: PagseguroChargeService) { }

  ngOnInit() {
    this.providerService.listCharges().subscribe({
      next: (data: Charge[]) => {
        this.records = data;

        console.log(this.records);

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

    this.recordMenuItems = [
      {
        label: 'Links', 
        icon: 'pi pi-fw pi-link',
        command: () => {
          this.openLinksDialog(this.selectedRecord.charge_links);
        }
      },
      {
        label: 'QR Code - PIX', 
        icon: 'pi pi-fw pi-qrcode',
        command: () => {
          this.openQrCodeDialog(this.selectedRecord?.qr_code);
        }
      },
      {
        label: 'Sincronizar status', 
        icon: 'pi pi-fw pi-sync',
        command: () => {
          this.checkStatus();
        }
      }
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

  openRecordMenu(event: Event, record: Charge) {
    this.selectedRecord = record;
    this.recordMenu.toggle(event);
  }

  openLinksDialog(data?: Array<ChargeLink>) {
    this.customDynamicDialogService.openDialog<void>(LinksComponent, 'Links', data);
  }

  openQrCodeDialog(data: QrCode): void {
    this.customDynamicDialogService.openDialog<void>(QrCodeComponent, 'QR Code - PIX', data);
  }

  checkStatus() {
    this.pagseguroChargeService.checkStatus(this.selectedRecord.id).subscribe({
      next: (res: Charge) => {
        const index = this.records.indexOf(this.selectedRecord);
        this.records[index] = res;
      }
    });
  }
}
