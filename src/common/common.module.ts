import { Module } from '@nestjs/common';
import { CloudinaryConfigService } from 'src/common/cloudinary.config';
import { CloudinaryService } from 'src/common/cloudinary.service';
import { PaginationService } from 'src/common/pagination.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [
    PaginationService,
    CloudinaryService,
    PrismaService,
    CloudinaryConfigService,
  ],
  exports: [PaginationService, CloudinaryService, PrismaService],
})
export class CommonModule {}
