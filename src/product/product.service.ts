import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async create(createProductDto: CreateProductDto) {

    const category = await this.categoryRepository.findOneBy({
      nameCategory: createProductDto.category
    })

    if (!category) {
      throw new BadRequestException("Cannot find category")
    }

    return await this.productRepository.save({
      ...createProductDto,
      category
    });
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {

    const category = await this.categoryRepository.findOneBy({
      nameCategory: updateProductDto.category
    })

    if (!category) {
      throw new BadRequestException("Cannot find category")
    }

    return await this.productRepository.update(id, {
      ...updateProductDto,
      category
    });
  }

  async remove(id: number) {
    return await this.productRepository.softDelete({ id });
  }
}
