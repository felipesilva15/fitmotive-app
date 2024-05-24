export interface QrCode {
    id?: number;
    charge_id?: number;
    image_uri: string;
    amount: number;
    text: string;
    expiration_date: string | Date;
    bank_gateway_id?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}
