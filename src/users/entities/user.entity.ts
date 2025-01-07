import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Tên bảng trong cơ sở dữ liệu
export class User {
  @PrimaryGeneratedColumn() // Tạo một trường ID tự động tăng
  id: number;

  @Column({ unique: true })
  useremail: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column()
  phone: string;
}
