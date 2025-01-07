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

  @Column()
  quantity: number;

  @Column()
  brand?: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  dateAdded: string;
}
