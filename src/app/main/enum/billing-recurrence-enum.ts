export enum BillingRecurrenceEnum {
    Weekly = 'WEEKLY',
    Fortnightly = 'FORTNIGHTLY',
    Monthly = 'MONTHLY',
    Quarterly = 'QUARTERLY',
    SemiAnnual = 'SEMI_ANNUAL',
    Annual = 'ANNUAL',
}

export const BillingRecurrenceEnumLabels: Record<BillingRecurrenceEnum, string> = {
    [BillingRecurrenceEnum.Weekly]: 'Semanal',
    [BillingRecurrenceEnum.Fortnightly]: 'Quinzenal',
    [BillingRecurrenceEnum.Monthly]: 'Mensal',
    [BillingRecurrenceEnum.Quarterly]: 'Trimestral',
    [BillingRecurrenceEnum.SemiAnnual]: 'Semestral',
    [BillingRecurrenceEnum.Annual]: 'Anual',
};
  
export const BillingRecurrenceEnumOptions: Array<{ code: BillingRecurrenceEnum, name: string }> = Object.keys(BillingRecurrenceEnum)
.map(key => ({
    code: BillingRecurrenceEnum[key] as BillingRecurrenceEnum,
    name: BillingRecurrenceEnumLabels[BillingRecurrenceEnum[key] as BillingRecurrenceEnum],
}));