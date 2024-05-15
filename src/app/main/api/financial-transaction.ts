import { MovementTypeEnum } from "../enum/movement-type-enum";

export interface FinancialTransaction {
    id?: number;
    user_id: number;
    description?: string;
    amount: number;
    movement_type: MovementTypeEnum
    transaction_date: string | Date;
    created_at?: string | Date;
    updated_at?: string | Date;
}
