import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinModule } from './coin/coin.module';

@Module({
  imports: [CoinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
