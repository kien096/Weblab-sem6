import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

require("dotenv").config();
let port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  app.use(cookieParser());

  await app.listen(port || 3000);
  
}
bootstrap();
