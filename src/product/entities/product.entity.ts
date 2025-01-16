import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column()
  collection: number;

  @Column('json', { nullable: true })
  sizes: string[];

  @Column('json', { nullable: true })
  colors: string[];

  @Column()
  shortdescription?: string;

  @Column('int', { default: 0 })
  quantity: number; // Số lượng sản phẩm

  @Column({ nullable: true })
  brands: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  dateAdded: string;
}
