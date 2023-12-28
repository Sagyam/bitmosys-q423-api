import { IsEnum, IsMongoId, IsPositive, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsPositive({ message: 'Amount must be a positive number' })
  amount: number;

  @IsEnum(['buy', 'sell'], {
    message: 'Transaction type must be either buy or sell',
  })
  transactionType: string;

  @IsString({ message: 'Coin type must be a string' })
  coinSymbol: string;

  @IsMongoId({ message: 'User ID must be a valid Mongo ID' })
  userId: string;

  @IsMongoId({ message: 'Wallet ID must be a valid Mongo ID' })
  walletId: string;
}
