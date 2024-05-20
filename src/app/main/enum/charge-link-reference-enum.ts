export enum ChargeLinkReferenceEnum {
    QrCodePix = 'QRCODE_PIX',
    Boleto = 'BOLETO',
    Payment = 'PAYMENT'
}

export const ChargeLinkReferenceEnumLabels: Record<ChargeLinkReferenceEnum, string> = {
    [ChargeLinkReferenceEnum.QrCodePix]: 'QR Code PIX',
    [ChargeLinkReferenceEnum.Boleto]: 'Boleto',
    [ChargeLinkReferenceEnum.Payment]: 'Pagamento'
};
  
export const ChargeLinkReferenceEnumOptions: Array<{ code: ChargeLinkReferenceEnum, name: string }> = Object.keys(ChargeLinkReferenceEnum)
.map(key => ({
    code: ChargeLinkReferenceEnum[key] as ChargeLinkReferenceEnum,
    name: ChargeLinkReferenceEnumLabels[ChargeLinkReferenceEnum[key] as ChargeLinkReferenceEnum],
}));