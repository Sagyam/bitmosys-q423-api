import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4000', 'https://bitmosys-q423.vercel.app'],
  });

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Coins API')
    .setDescription('The coins API description')
    .setVersion('1.0')
    .addTag('coins')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap()
  .then(() => console.log('Application is listening on port 3000'))
  .catch((err) => console.error(err));
