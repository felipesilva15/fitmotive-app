import { Charge } from "./charge";
import { User } from "./user";

export interface Defaulter {
    id?: number;
    user_id?: number;
    total_amount_owed: number;
    quantity_total_charges: number;
    last_charge_date: string | Date;
    user: User;
    charges?: Array<Charge>;
}
