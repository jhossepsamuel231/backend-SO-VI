import { Product } from "src/product/entities/product.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class Category {

  @Column({ primary: true, unique: true, generated: true })
  id: number;

  @Column()
  nameCategory: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @DeleteDateColumn()
  deletedAt: Date;

}
