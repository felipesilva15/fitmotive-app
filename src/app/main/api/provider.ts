import { ProfessionEnum } from "../enum/profession-enum";
import { Address } from "./address";
import { PaymentMethod } from "./payment-method";
import { Phone } from "./phone";

export interface Provider {
    id?: number;
    user_id?: number;
    plan_id: number;
    name: string;
    email: string;
    password: string;
    cpf_cnpj: string;
    birth_date: string | Date;
    bank_gateway_id?: string;
    profession: ProfessionEnum;
    inactive: boolean;
    phones?: Array<Phone>;
    payment_methods?: Array<PaymentMethod>;
    adresses?: Array<Address>;
    created_at?: string | Date;
    updated_at?: string | Date;
}
