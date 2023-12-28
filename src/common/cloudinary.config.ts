import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudinaryConfigService {
  get cloudName(): string {
    return process.env.CLOUDINARY_CLOUD_NAME;
  }

  get apiKey(): string {
    return process.env.CLOUDINARY_API_KEY;
  }

  get apiSecret(): string {
    return process.env.CLOUDINARY_API_SECRET;
  }
}
