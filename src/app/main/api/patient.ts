import { BillingRecurrenceEnum } from "../enum/billing-recurrence-enum";
import { Address } from "./address";
import { PaymentMethod } from "./payment-method";
import { Phone } from "./phone";

export interface Patient {
    id?: number;
    user_id?: number;
    provider_id?: number;
    name: string;
    email: string;
    cpf_cnpj: string;
    birth_date: string;
    bank_gateway_id?: string;
    inactive: boolean;
    service_price: number;
    billing_recurrence?: BillingRecurrenceEnum;
    phones?: Array<Phone>;
    payment_methods?: Array<PaymentMethod>;
    adresses?: Array<Address>;
    created_at: string;
    updated_at: string;
}
