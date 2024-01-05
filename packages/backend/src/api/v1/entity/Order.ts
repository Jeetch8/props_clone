import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./User";
import { Cart } from "./Cart";
import { User_address } from "./User_address";
import { Payment_method } from "./Payment_method";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ManyToOne(() => Users)
  user_id: Users;

  @OneToOne(() => Cart)
  cart_id: Cart;

  @Column()
  total: number;

  @Column()
  discounted_total: number;

  @OneToOne(() => Payment_method)
  payment_method: Payment_method;

  @Column()
  payment_status: string;

  @OneToOne(() => User_address)
  delivery_address_id: User_address;

  @Column()
  delivery_status: string;

  @Column()
  delivery_date: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
