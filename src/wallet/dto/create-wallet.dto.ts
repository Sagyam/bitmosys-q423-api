import { IsMongoId, IsPositive } from 'class-validator';

export class CreateWalletDto {
  @IsPositive({ message: 'Balance must be a positive number' })
  balance: number;

  @IsMongoId({ message: 'Coin ID must be a valid Mongo ID' })
  coinId: string;

  @IsMongoId({ message: 'User ID must be a valid Mongo ID' })
  userId: string;
}
