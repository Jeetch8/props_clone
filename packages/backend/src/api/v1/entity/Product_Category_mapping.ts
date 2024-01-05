import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
} from "typeorm";
import { Product } from "./Product";
import { Category } from "./Category";

@Entity()
export class Product_Category_mapping {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @OneToOne(() => Product)
  product_id: string;

  @OneToOne(() => Category)
  category_id: string;

  @Column({ type: "date" })
  created_at: Date;
}
