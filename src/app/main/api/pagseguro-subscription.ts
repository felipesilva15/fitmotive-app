import { PagseguroSubscriptionInvoice } from './pagseguro-subscription-invoice';
import { PaymentStatusEnum } from "../enum/payment-status-enum";
import { Trial } from "./trial";
import { Plan } from './plan';
import { Amount } from './amount';

export interface PagseguroSubscription {
    id?: string;
    reference_id?: string;
    amount?: Amount;
    status?: PaymentStatusEnum;
    plan?: Plan;
    trial?: Trial;
    next_invoice_at?: string | Date;
    invoices?: Array<PagseguroSubscriptionInvoice>;
    created_at?: string | Date;
    updated_at?: string | Date;
}
