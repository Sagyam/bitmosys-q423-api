import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { PaginatedRequestDTO } from './dto/pagination-request.dto';
import { PaginatedResponseDTO } from './dto/pagination-response.dto';

@Injectable()
export class PaginationService<Entity> {
  constructor(private readonly prisma: PrismaService) {}

  async findAllWithPagination(
    model: string,
    paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<Entity>> {
    let skip = 0;
    let take = 10;
    const where = {};
    const orderBy = {};

    if (paginatedRequest.page && paginatedRequest.pageSize) {
      skip = (+paginatedRequest.page - 1) * +paginatedRequest.pageSize;
    }

    if (paginatedRequest.pageSize) {
      take = +paginatedRequest.pageSize;
    }

    if (
      paginatedRequest.filterQuery &&
      paginatedRequest.filterField &&
      paginatedRequest.filterOperator
    ) {
      where[paginatedRequest.filterField] = {
        [paginatedRequest.filterOperator]: paginatedRequest.filterQuery,
      };
    }

    if (paginatedRequest.sortBy && paginatedRequest.sortOrder) {
      orderBy[paginatedRequest.sortBy] = paginatedRequest.sortOrder;
    }

    const data = await this.prisma[model].findMany({
      where,
      skip,
      take,
      orderBy,
    });

    const totalCount = await this.prisma[model].count({ where });

    const paginatedResponse = new PaginatedResponseDTO<Entity>();
    paginatedResponse.data = data;
    paginatedResponse.pageSize = take;
    paginatedResponse.page = paginatedRequest.page || 1;
    paginatedResponse.isLastPage = skip + take >= totalCount;

    return paginatedResponse;
  }
}
