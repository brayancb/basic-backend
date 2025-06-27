import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'aplicacion basica backend ejecutandose';
  }
  getResponse(): string {
    return 'respuesta de la aplicacion basica backend';
  }

}
