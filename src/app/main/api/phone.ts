import { PhoneTypeEnum } from '../enum/phone-type-enum';

export interface Phone {
    id?: number;
    user_id: number;
    country: string;
    ddd: string;
    number: string;
    type: PhoneTypeEnum;
    main: boolean;
    created_at?: string;
    updated_at?: string;
}
