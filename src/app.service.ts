import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'aplicacion basica backend ejecutandose';
  }
  getResponse(): string {
    return 'respuesta de la aplicacion basica backend';
  }
  getResponse2(): string {
    return 'nueva funcion de la aplicacion basica backend';
  }

}
