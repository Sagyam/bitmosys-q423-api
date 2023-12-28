import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateCoinDto } from '../dto/create-coin.dto';

@Injectable()
export class ImageValidationPipe implements PipeTransform {
  async transform(value: CreateCoinDto) {
    const file = value.icon;

    if (!file) {
      throw new BadRequestException('Icon is required');
    }

    // Check if the file is an image
    if (!file.mimetype.startsWith('image')) {
      throw new BadRequestException(
        'Invalid file format. Only images are allowed.',
      );
    }

    // Check if the file size is less than 1MB
    const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
    if (file.size > maxSizeInBytes) {
      throw new BadRequestException(
        'File size exceeds the maximum allowed size (1MB).',
      );
    }

    // If everything is fine, return the file
    return file;
  }
}
