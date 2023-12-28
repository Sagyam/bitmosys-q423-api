import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';

@Module({
  imports: [CommonModule],
  controllers: [CoinController],
  providers: [CoinService],
})
export class CoinModule {}
