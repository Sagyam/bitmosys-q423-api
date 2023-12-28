import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';

export class User {
  id: string;
  name: string;
  balance: number;
  wallets: Wallet[];
  transactions: Transaction[];
}
