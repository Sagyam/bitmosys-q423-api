import { User } from 'src/user/entities/user.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';

export class Transaction {
  id: string;
  amount: number;
  transactionType: string;
  transactionValue: number;
  coinSymbol: string;
  timestamp: Date;
  userId: string;
  user: User;
  walletId: string;
  wallet: Wallet;
}
