import { Category } from "src/category/entities/category.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Product {

  @Column({ primary: true, unique: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  estado: boolean;

  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
  })
  category: Category;

  @DeleteDateColumn()
  deletedAt: Date;

}
