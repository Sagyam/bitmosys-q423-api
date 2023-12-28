import { Coin } from 'src/coin/entities/coin.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';

export class Wallet {
  id: string;
  balance: number;
  userId: string;
  user: User;
  coinId: string;
  coin: Coin;
  transactions: Transaction[];
}
