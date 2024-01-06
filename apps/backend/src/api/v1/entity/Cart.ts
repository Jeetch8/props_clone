import {
  Column,
  Entity,
  Generated,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./User";

export enum CartStatus {
  INACTIVE = "inactive",
  ACTIVE = "active",
}

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ManyToMany(() => Users)
  user_id: string;

  @Column({
    type: "enum",
    enum: CartStatus,
  })
  status: CartStatus;

  @Column({ type: "date" })
  created_at: Date;

  @Column({ type: "date" })
  updated_at: Date;
}
