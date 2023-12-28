import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
  imports: [CommonModule],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
