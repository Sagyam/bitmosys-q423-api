import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import { CloudinaryConfigService } from 'src/common/cloudinary.config';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: CloudinaryConfigService) {
    cloudinary.v2.config({
      cloud_name: this.configService.cloudName,
      api_key: this.configService.apiKey,
      api_secret: this.configService.apiSecret,
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const result = await cloudinary.v2.uploader.upload(file.path, {
      folder: 'coin',
    });
    return result.secure_url;
  }
}
