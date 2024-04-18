import { Address } from "./address";
import { PaymentMethod } from "./payment-method";
import { Phone } from "./phone";

export interface User {
    id?: number;
    name: string;
    email: string;
    cpf_cnpj: string;
    birth_date: string;
    bank_gateway_id?: string;
    inactive: boolean;
    service_price: number;
    created_at: string;
    updated_at: string;
    phones?: Array<Phone>;
    payment_methods?: Array<PaymentMethod>;
    adresses?: Array<Address>;
}