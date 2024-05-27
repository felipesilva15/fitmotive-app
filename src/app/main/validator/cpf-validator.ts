import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CpfValidator {
    static validate(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const cpf = control.value;
            if (!cpf) {
                return null;  // Don't validate empty value
            }

            // CPF validation logic
            const isValid = CpfValidator.cpf(cpf);
            return isValid ? null : { cpf: true };
        };
    }

    private static cpf(cpf: string): boolean {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
            return false;
        }

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        if (remainder !== parseInt(cpf.substring(9, 10), 10)) {
            return false;
        }

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        if (remainder !== parseInt(cpf.substring(10, 11), 10)) {
            return false;
        }

        return true;
    }
}