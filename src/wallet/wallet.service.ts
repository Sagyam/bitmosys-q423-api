import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaginatedRequestDTO } from 'src/common/dto/pagination-request.dto';
import { PaginatedResponseDTO } from 'src/common/dto/pagination-response.dto';
import { PaginationService } from 'src/common/pagination.service';
import { PrismaService } from 'src/common/prisma.service';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  constructor(
    private readonly paginationService: PaginationService<Wallet>,
    private prisma: PrismaService,
  ) {}
  create(createWalletDto: CreateWalletDto) {
    const { coinId, userId, balance } = createWalletDto;

    const coin = this.prisma.coin.findUnique({ where: { id: coinId } });
    if (!coin) {
      throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
    }

    const user = this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.wallet.create({
      data: {
        coin: {
          connect: {
            id: coinId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
        balance,
      },
    });
  }

  async findAllWithPagination(
    paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<Wallet>> {
    return this.paginationService.findAllWithPagination(
      'Wallet',
      paginatedRequest,
    );
  }

  findOne(id: string) {
    return this.prisma.wallet.findUnique({ where: { id } });
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    const { balance } = updateWalletDto;
    return this.prisma.wallet.update({
      where: { id },
      data: {
        balance,
      },
    });
  }

  remove(id: string) {
    return this.prisma.wallet.delete({
      where: { id },
    });
  }
}
