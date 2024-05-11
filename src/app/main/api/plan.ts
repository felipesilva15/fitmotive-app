import { BillingIntervalEnum } from "../enum/billing-interval-enum";

export interface Plan {
    id?: number;
    name: string;
    description?: string;
    price: number;
    trial_days?: number;
    billing_interval: BillingIntervalEnum;
    bank_gateway_id?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}
