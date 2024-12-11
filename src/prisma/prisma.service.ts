import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Note: this is optional
    await this.$connect();
  }
}

// import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService {
//   public prismaClient: PrismaClient;
//   constructor() {
//     this.prismaClient = new PrismaClient();
//   }
// }
