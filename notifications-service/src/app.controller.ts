import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('home') // decorator para mapear a url (semelhante ao @GetMapping do Springboot)
  getHello(): string {
    return this.appService.getHello();
  }
}

/*
                            ----------------------------------
                            Inversão x injeção de dependências
                            ----------------------------------

  Injeção = é uma forma de automatizar as dependências no momento em que as classes forem instanciadas (dependências pré-determinadas).

  Inversão = quem instancia determinada classe, vai dizer quais as dependências que pertencem a ela.

*/
