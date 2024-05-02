export enum ProfessionEnum {
    PersonalTrainer = 'PERSONAL_TRAINER',
    Nutritionist = 'NUTRITIONIST'
}

export const ProfessionEnumLabels: Record<ProfessionEnum, string> = {
    [ProfessionEnum.PersonalTrainer]: 'Personal trainer',
    [ProfessionEnum.Nutritionist]: 'Nutricionista',
};
  
export const ProfessionEnumOptions: Array<{ code: ProfessionEnum, name: string }> = Object.keys(ProfessionEnum)
.map(key => ({
    code: ProfessionEnum[key] as ProfessionEnum,
    name: ProfessionEnumLabels[ProfessionEnum[key] as ProfessionEnum],
}));