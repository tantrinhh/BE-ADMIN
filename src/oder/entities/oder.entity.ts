// order.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Oder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  ward: string;

  @Column()
  streetAddress: string;

  @Column()
  phone: string;

  @Column()
  productName: string;

  @Column()
  totalItem: number;

  @Column('decimal')
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
