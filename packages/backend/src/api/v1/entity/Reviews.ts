import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./User";
import { Product } from "./Product";

@Entity("reviews")
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column()
  rating: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  images: boolean;

  @Column()
  createdAt: number;
}
