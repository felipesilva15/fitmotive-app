export enum PaymentStatusEnum {
    Waiting = 'WAITING',
    Paid = 'PAID',
    Canceled = 'CANCELED',
    Declined = 'DECLINED',
    InAnalysis = 'IN_ANALYSIS',
    Authorized = 'AUTHORIZED',
    Trial = 'TRIAL',
    Active = 'ACTIVE',
    UnPaid = 'UNPAID'
}

export const PaymentStatusEnumLabels: Record<PaymentStatusEnum, string> = {
    [PaymentStatusEnum.Waiting]: 'Pendente',
    [PaymentStatusEnum.Paid]: 'Pago',
    [PaymentStatusEnum.Canceled]: 'Cancelado',
    [PaymentStatusEnum.Declined]: 'Recusado',
    [PaymentStatusEnum.InAnalysis]: 'Em análise',
    [PaymentStatusEnum.Authorized]: 'Autorizado',
    [PaymentStatusEnum.Trial]: 'Experimental',
    [PaymentStatusEnum.Active]: 'Ativa',
    [PaymentStatusEnum.UnPaid]: 'Não pago'
};
  
export const PaymentStatusEnumOptions: Array<{ code: PaymentStatusEnum, name: string }> = Object.keys(PaymentStatusEnum)
.map(key => ({
    code: PaymentStatusEnum[key] as PaymentStatusEnum,
    name: PaymentStatusEnumLabels[PaymentStatusEnum[key] as PaymentStatusEnum],
}));