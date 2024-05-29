import { PagseguroSubscriptionInvoice } from './pagseguro-subscription-invoice';
import { PaymentStatusEnum } from "../enum/payment-status-enum";
import { Trial } from "./trial";

export interface PagseguroSubscription {
    id?: string;
    reference_id?: string;
    status?: PaymentStatusEnum;
    trial?: Trial;
    next_invoice_at?: string | Date;
    invoices?: Array<PagseguroSubscriptionInvoice>;
    created_at?: string | Date;
    updated_at?: string | Date;
}
