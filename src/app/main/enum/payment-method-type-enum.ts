export enum PaymentMethodTypeEnum {
}

export enum PaymentMethodTypeEnum {
    CreditCard = 'CREDIT_CARD',
    DebitCard = 'DEBIT_CARD',
    Pix = 'PIX',
    Boleto = 'BOLETO'
}

export const PaymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = {
    [PaymentMethodTypeEnum.CreditCard]: 'Cartão de crédito',
    [PaymentMethodTypeEnum.DebitCard]: 'Cartão de débito',
    [PaymentMethodTypeEnum.Pix]: 'PIX',
    [PaymentMethodTypeEnum.Boleto]: 'Boleto'
};
  
export const PaymentMethodTypeEnumOptions: Array<{ code: PaymentMethodTypeEnum, name: string }> = Object.keys(PaymentMethodTypeEnum)
.map(key => ({
    code: PaymentMethodTypeEnum[key] as PaymentMethodTypeEnum,
    name: PaymentMethodTypeEnumLabels[PaymentMethodTypeEnum[key] as PaymentMethodTypeEnum],
}));