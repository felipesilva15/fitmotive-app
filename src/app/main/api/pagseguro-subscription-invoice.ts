import { PaymentStatusEnum } from "../enum/payment-status-enum";
import { Amount } from "./amount";

export interface PagseguroSubscriptionInvoice {
    id?: string;
    status?: PaymentStatusEnum;
    amount?: Amount;
    ocorrence?: number;
    created_at?: string | Date;
    updated_at?: string | Date;
}
