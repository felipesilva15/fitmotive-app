export interface Address {
    id?: number;
    user_id: number;
    name: string;
    postal_code: string;
    street: string;
    locality: string;
    city: string;
    region: string;
    region_code: string;
    number: string;
    complement?: string;
    main: boolean;
    created_at?: string;
    updated_at?: string;
}
