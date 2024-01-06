import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./User";
import { Product } from "./Product";

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ManyToOne(() => Users)
  user_id: string;

  @OneToOne(() => Product)
  product_id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
}
