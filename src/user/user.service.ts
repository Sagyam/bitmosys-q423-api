import { Injectable } from '@nestjs/common';
import { PaginatedRequestDTO } from 'src/common/dto/pagination-request.dto';
import { PaginatedResponseDTO } from 'src/common/dto/pagination-response.dto';
import { PaginationService } from 'src/common/pagination.service';
import { PrismaService } from 'src/common/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly paginationService: PaginationService<User>,
    private prisma: PrismaService,
  ) {}
  create(createUserDto: CreateUserDto) {
    const { name, balance } = createUserDto;
    return this.prisma.user.create({
      data: {
        name,
        balance,
      },
    });
  }

  async findAll(
    paginatedRequest: PaginatedRequestDTO,
  ): Promise<PaginatedResponseDTO<User>> {
    return this.paginationService.findAllWithPagination(
      'User',
      paginatedRequest,
    );
  }

  findOne(id: string) {
    const user = this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const { name, balance } = updateUserDto;
    return this.prisma.user.update({
      where: { id },
      data: {
        name,
        balance,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
