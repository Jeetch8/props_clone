import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

export enum ProductType {
  SIZE = "size",
  COLOUR = "colour",
}

@Entity()
export class Product_atribute {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column()
  product_id: string;

  @Column({
    type: "enum",
    enum: ProductType,
  })
  type: ProductType;

  @Column()
  value: string;

  @Column({ type: "date" })
  created_at: Date;
}
