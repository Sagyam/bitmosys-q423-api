import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coin } from 'src/coin/entities/coin.entity';
import { PaginatedRequestDTO } from 'src/common/dto/pagination-request.dto';
import { PaginatedResponseDTO } from 'src/common/dto/pagination-response.dto';
import { PaginationService } from 'src/common/pagination.service';
import { PrismaService } from 'src/common/prisma.service';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    private readonly paginationService: PaginationService<Transaction>,
    private prisma: PrismaService,
  ) {}

  async handleTransaction(
    user: User,
    wallet: Wallet,
    coin: Coin,
    amount: number,
    transactionType: string,
  ) {
    const transactionValue = coin.exchangeRate * amount;

    if (transactionType === 'buy') {
      if (user.balance < transactionValue) {
        throw new HttpException('Insufficient funds', HttpStatus.BAD_REQUEST);
      }

      user.balance -= transactionValue;
      wallet.balance += amount;
    }

    if (transactionType === 'sell') {
      if (wallet.balance < amount) {
        throw new HttpException('Insufficient funds', HttpStatus.BAD_REQUEST);
      }

      user.balance += transactionValue;
      wallet.balance -= amount;
    }

    try {
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          balance: user.balance,
        },
      });

      await this.prisma.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: wallet.balance,
        },
      });

      return await this.prisma.transaction.create({
        data: {
          amount,
          transactionType,
          transactionValue,
          coin: {
            connect: {
              id: coin.id,
            },
          },
          user: {
            connect: {
              id: user.id,
            },
          },
          wallet: {
            connect: {
              id: wallet.id,
            },
          },
        },
      });
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(createTransactionDto: CreateTransactionDto) {
    const { amount, transactionType, coinSymbol, userId, walletId } =
      createTransactionDto;

    const coin = await this.prisma.coin.findUnique({
      where: { coinSymbol: coinSymbol },
    });

    if (!coin) {
      throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const wallet = await this.prisma.wallet.findUnique({
      where: { id: walletId },
    });

    if (!wallet) {
      throw new HttpException('Wallet not found', HttpStatus.NOT_FOUND);
    }

    if (user.id !== wallet.userId) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return await this.handleTransaction(
      user as any,
      wallet as any,
      coin as any,
      amount,
      transactionType,
    );
  }

  async findAllWithPagination(
    paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<Transaction>> {
    return this.paginationService.findAllWithPagination(
      'Coin',
      paginatedRequest,
    );
  }

  findOne(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
      include: {
        user: true,
        wallet: true,
      },
    });
  }
}
