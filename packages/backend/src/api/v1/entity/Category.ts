import {
  Column,
  Entity,
  Generated,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @OneToOne(() => Category)
  parent_category_id: Category;

  @Column()
  name: string;

  @Column({
    type: "text",
  })
  description: string;
}
