export enum BillingIntervalEnum {
    Day = 'DAY',
    Month = 'MONTH',
    Year = 'YEAR',
}

export const BillingIntervalEnumLabels: Record<BillingIntervalEnum, string> = {
    [BillingIntervalEnum.Day]: 'Diário',
    [BillingIntervalEnum.Month]: 'Mensal',
    [BillingIntervalEnum.Year]: 'Anual',
};
  
export const BillingIntervalEnumOptions: Array<{ code: BillingIntervalEnum, name: string }> = Object.keys(BillingIntervalEnum)
.map(key => ({
    code: BillingIntervalEnum[key] as BillingIntervalEnum,
    name: BillingIntervalEnumLabels[BillingIntervalEnum[key] as BillingIntervalEnum],
}));