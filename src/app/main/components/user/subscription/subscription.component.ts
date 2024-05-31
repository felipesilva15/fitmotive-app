import { PaymentStatusEnum, PaymentStatusEnumLabels } from 'src/app/main/enum/payment-status-enum';
import { Component } from '@angular/core';
import { PagseguroSubscription } from 'src/app/main/api/pagseguro-subscription';
import { PagseguroSubscriptionInvoice } from 'src/app/main/api/pagseguro-subscription-invoice';
import { PagseguroSubscriberService } from 'src/app/main/service/pagseguro-subscriber.service';
import { ProviderService } from 'src/app/main/service/provider.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {
  subscription!: PagseguroSubscription;
  invoices!: PagseguroSubscriptionInvoice[];
  isLoading: boolean = true;
  paymentStatusEnumLabels: Record<PaymentStatusEnum, string> = PaymentStatusEnumLabels;

  constructor(private pagseguroSubscriberService: PagseguroSubscriberService) { }

  ngOnInit(): void {
    //this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.pagseguroSubscriberService.getSubscription().subscribe({
      next: (res: PagseguroSubscription) => {
        this.subscription = res;
        this.invoices = res.invoices;

        this.isLoading = false;
        
        console.log(this.subscription, this.invoices);
      }
    });
  }
}
