import { PaymentMethodTypeEnum } from "../enum/payment-method-type-enum";

export interface PaymentMethod {
    id?: number;
    user_id: number;
    type: PaymentMethodTypeEnum;
    card_number?: string;
    network_token?: string;
    exp_month?: string;
    exp_year?: string;
    security_code?: string;
    main: boolean;
    created_at?: string;
    updated_at?: string;
}
