import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { SchemesModule } from './modules/schemes/schemes.module';
import { NewsModule } from './modules/news/news.module';
import { BlogModule } from './modules/blog/blog.module';
import { EmploymentModule } from './modules/employment/employment.module';
import { GrievancesModule } from './modules/grievances/grievances.module';
import { VolunteersModule } from './modules/volunteers/volunteers.module';
import { AiModule } from './modules/ai/ai.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),

    // Rate limiting (security: prevent DoS/brute-force)
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 20 },
      { name: 'medium', ttl: 10000, limit: 100 },
      { name: 'long', ttl: 60000, limit: 1000 },
    ]),

    // Database
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 5432),
        username: config.get('DB_USER', 'postgres'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME', 'markapuram'),
        autoLoadEntities: true,
        synchronize: config.get('NODE_ENV') !== 'production', // Use migrations in prod
        ssl: config.get('DB_SSL') === 'true' ? { rejectUnauthorized: false } : false,
      }),
      inject: [ConfigService],
    }),

    // Feature modules
    AuthModule,
    UsersModule,
    SchemesModule,
    NewsModule,
    BlogModule,
    EmploymentModule,
    GrievancesModule,
    VolunteersModule,
    AiModule,
    NotificationsModule,
    AnalyticsModule,
    DashboardModule,
    SearchModule,
  ],
})
export class AppModule {}
