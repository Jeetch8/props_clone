import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Visuals } from "./Visuals";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seller_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  returns_accepted: boolean;

  @Column()
  main_image: string;

  @OneToOne(() => Visuals)
  @JoinColumn()
  main_image_id: Visuals;

  @Column()
  estimated_delivery: number;

  @Column()
  original_price: number;

  @Column()
  discount_price: number;

  @Column()
  stock: number;

  @Column({ type: "date" })
  created_at: Date;

  @Column({ type: "date" })
  updated_at: Date;
}
