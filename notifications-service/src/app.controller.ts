import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { Body } from '@nestjs/common/decorators';
import { CreateNotificationBody } from './create.notification-body';

@Controller('notifications')
export class AppController {
  // inversão de dependência
  constructor(private readonly prisma: PrismaService) {}
  @Get() // decorator para mapear a url (semelhante ao @GetMapping do Springboot)
  list() {
    return this.prisma.notification.findMany(); //retorna todas as notificações
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    // decorator Body para receber o corpo da requisição. Tipagem com a classe CreateNotificationBody
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}

/*
                            ----------------------------------
                            Inversão x injeção de dependências
                            ----------------------------------

  Injeção = é uma forma de automatizar as dependências no momento em que as classes forem instanciadas (dependências pré-determinadas).

  Inversão = quem instancia determinada classe, vai dizer quais as dependências que pertencem a ela.

*/
