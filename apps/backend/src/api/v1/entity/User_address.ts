import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./User";

@Entity()
export class User_address {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @ManyToOne(() => Users)
  user_id: Users;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @Column()
  address_type: string;

  @Column()
  landmark: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
