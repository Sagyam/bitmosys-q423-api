import {
  IsHexColor,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateCoinDto {
  @IsString({ message: 'Name must be a string' })
  @Length(3, 30, { message: 'Name must be between 3 and 30 characters' })
  name: string;

  @IsString({ message: 'Symbol must be a string' })
  @Length(3, 6, { message: 'Symbol must be between 3 and 6 characters' })
  coinSymbol: string;

  @IsNotEmpty({ message: 'Icon must be a file' })
  icon: Express.Multer.File;

  @IsPositive({ message: 'Exchange rate must be a positive number' })
  exchangeRate: number;

  @IsHexColor({ message: 'Brand color must be a valid hex color' })
  brandColor: string;
}
