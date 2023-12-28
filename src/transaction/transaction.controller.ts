import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PaginatedRequestDTO } from 'src/common/dto/pagination-request.dto';
import { PaginatedResponseDTO } from 'src/common/dto/pagination-response.dto';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto): Promise<any> {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  async findAll(
    @Query() paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<Transaction>> {
    return this.transactionService.findAllWithPagination(paginatedRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }
}
