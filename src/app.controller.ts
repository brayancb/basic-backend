import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/response')
  getResponse(): string {
    return this.appService.getResponse();
  }
  @Get('/funcion2')
  getResponse2(): string {
    return this.appService.getResponse2();
  }
}
