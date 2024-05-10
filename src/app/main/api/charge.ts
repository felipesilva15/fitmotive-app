import { PaymentMethodTypeEnum } from "../enum/payment-method-type-enum";
import { PaymentStatusEnum } from "../enum/payment-status-enum";

export interface Charge {
    id?: number;
    provider_id?: number;
    patient_id?: number;
    patient_name?: string;
    payment_method: PaymentMethodTypeEnum,
    due_date: string | Date,
    amount: number,
    payment_status: PaymentStatusEnum,
    paid_at?: string | Date,
    created_at?: string | Date;
    updated_at?: string | Date;
}
