import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import pg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private pool: pg.Pool;

  constructor(configService: ConfigService) {
    const connectionString = configService.getOrThrow<string>('DATABASE_URL');
    
    const pool = new pg.Pool({
      connectionString,
      max: 50,
      connectionTimeoutMillis: 20000,
      idleTimeoutMillis: 30000,
    });
    
    const adapter = new PrismaPg(pool);
    super({ adapter, log: ['query', 'error'] });
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma connected to PostgreSQL');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
    console.log('🔌 Prisma disconnected from PostgreSQL');
  }
}
