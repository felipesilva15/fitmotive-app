import { PaymentStatusEnum } from "../enum/payment-status-enum";

export interface PagseguroSubscriptionInvoice {
    id?: string;
    status?: PaymentStatusEnum;
    ocorrence?: number;
    created_at?: string | Date;
    updated_at?: string | Date;
}
