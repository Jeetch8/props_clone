import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";

@Entity()
export class Cart_item {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ManyToOne(() => Cart)
  cart_id: Cart;

  @OneToOne(() => Product)
  product_id: Product;

  @Column()
  final_price: number;

  @Column()
  quantity: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
