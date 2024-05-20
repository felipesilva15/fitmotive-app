import { ChargeLinkReferenceEnum } from "../enum/charge-link-reference-enum";
import { ResponseTypeEnum } from "../enum/response-type-enum";

export interface ChargeLink {
    id?: number;
    charge_id: number;
    reference: ChargeLinkReferenceEnum,
    uri: string,
    response_type: ResponseTypeEnum,
    created_at?: string | Date;
    updated_at?: string | Date;
}
