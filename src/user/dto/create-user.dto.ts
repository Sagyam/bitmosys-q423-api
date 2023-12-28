import { IsPositive, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsPositive({ message: 'Balance must be a positive number' })
  balance: number;
}
