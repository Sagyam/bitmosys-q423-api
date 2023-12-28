import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { Coin } from 'src/coin/entities/coin.entity';
import { ImageValidationPipe } from 'src/coin/pipes/image-validation.pipe';
import { PaginatedRequestDTO } from 'src/common/dto/pagination-request.dto';
import { PaginatedResponseDTO } from 'src/common/dto/pagination-response.dto';
import { CoinService } from './coin.service';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';

@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Post()
  @UsePipes(new ImageValidationPipe())
  async create(@Body() createCoinDto: CreateCoinDto): Promise<Coin> {
    return await this.coinService.create(createCoinDto);
  }

  @Get()
  async findAll(
    @Query() paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<Coin>> {
    return this.coinService.findAllWithPagination(paginatedRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Coin> {
    return this.coinService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoinDto: UpdateCoinDto,
  ): Promise<Coin> {
    return this.coinService.update(id, updateCoinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Coin> {
    return this.coinService.remove(id);
  }
}
