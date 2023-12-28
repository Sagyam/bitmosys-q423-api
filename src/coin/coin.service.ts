import { Injectable } from '@nestjs/common';
import { Coin } from 'src/coin/entities/coin.entity';
import { CloudinaryService } from 'src/common/cloudinary.service';
import { PaginatedRequestDTO } from 'src/common/dto/pagination-request.dto';
import { PaginatedResponseDTO } from 'src/common/dto/pagination-response.dto';
import { PaginationService } from 'src/common/pagination.service';
import { PrismaService } from 'src/common/prisma.service';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';

@Injectable()
export class CoinService {
  constructor(
    private readonly paginationService: PaginationService<Coin>,
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async create(createCoinDto: CreateCoinDto): Promise<Coin> {
    const { name, coinSymbol, icon, exchangeRate, brandColor } = createCoinDto;

    // Upload image to Cloudinary and get the URL
    const iconUrl = await this.cloudinaryService.uploadImage(icon);

    // Save the record in Prisma
    const createdCoin = await this.prisma.coin.create({
      data: {
        name,
        coinSymbol,
        iconUrl,
        exchangeRate,
        brandColor,
        wallets: {
          create: [],
        },
        transactions: {
          create: [],
        },
      },
    });

    return createdCoin;
  }

  async findAllWithPagination(
    paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<Coin>> {
    return this.paginationService.findAllWithPagination(
      'Coin',
      paginatedRequest,
    );
  }

  findOne(id: string): Promise<Coin> {
    return this.prisma.coin.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCoinDto: UpdateCoinDto): Promise<Coin> {
    const { name, coinSymbol, exchangeRate, brandColor } = updateCoinDto;

    return this.prisma.coin.update({
      where: { id },
      data: {
        name,
        coinSymbol,
        exchangeRate,
        brandColor,
      },
    });
  }

  remove(id: string): Promise<Coin> {
    return this.prisma.coin.delete({
      where: { id },
    });
  }
}
