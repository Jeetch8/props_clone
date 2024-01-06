import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Visuals } from "./Visuals";

@Entity()
export class Seller {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Visuals)
  @JoinColumn()
  profile_picture: Visuals;

  @OneToOne(() => Visuals)
  @JoinColumn()
  banner_image: Visuals;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
