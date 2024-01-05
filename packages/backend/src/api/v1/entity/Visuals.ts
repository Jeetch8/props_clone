import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Visuals {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column()
  url: string;
}
