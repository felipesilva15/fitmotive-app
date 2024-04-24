export enum PhoneTypeEnum {
    Mobile = 'MOBILE',
    Business = 'BUSINESS',
    Home = 'HOME'
}

export const PhoneTypeEnumLabels: Record<PhoneTypeEnum, string> = {
    [PhoneTypeEnum.Mobile]: 'Celular',
    [PhoneTypeEnum.Business]: 'Trabalho',
    [PhoneTypeEnum.Home]: 'Casa'
};
  
export const PhoneTypeEnumOptions: Array<{ code: PhoneTypeEnum, name: string }> = Object.keys(PhoneTypeEnum)
.map(key => ({
    code: PhoneTypeEnum[key] as PhoneTypeEnum,
    name: PhoneTypeEnumLabels[PhoneTypeEnum[key] as PhoneTypeEnum],
}));