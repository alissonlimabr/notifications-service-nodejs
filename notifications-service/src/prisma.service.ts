import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

//Extende a classe PrismaClient (possui métodos de CRUD) e implementa a classe OnModuleInit que executa a função assim que a aplicação é carregada
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Logo após a aplicação ser carregada, força a conexão com o Prisma;
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // Caso a coenxão com o Prisma seja interrompida, fecha a aplicação.
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
