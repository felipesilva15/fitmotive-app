import { Address } from "./address";
import { PaymentMethod } from "./payment-method";
import { Phone } from "./phone";

export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    cpf_cnpj?: string;
    birth_date?: string | Date;
    bank_gateway_id?: string;
    inactive?: boolean;
    service_price?: number;
    created_at?: string | Date;
    updated_at?: string | Date;
    phones?: Array<Phone>;
    payment_methods?: Array<PaymentMethod>;
    adresses?: Array<Address>;
}