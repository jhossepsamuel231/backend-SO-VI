import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.101.95',
      port: 5432,
      username: 'postgres',
      password: 'jhossep',
      database: 'tienda',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
