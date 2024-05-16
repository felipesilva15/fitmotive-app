import { BankStatementTotalizers } from "./bank-statement-totalizers";
import { FinancialTransaction } from "./financial-transaction";

export interface BankStatement {
    data: Array<FinancialTransaction>,
    totalizers: BankStatementTotalizers
}
