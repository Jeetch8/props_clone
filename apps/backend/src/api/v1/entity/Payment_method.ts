import { Column, Entity, PrimaryGeneratedColumn, Generated } from "typeorm";

export enum Payment_method_type {
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  PAYPAL = "PAYPAL",
  GOOGLE_PAY = "GOOGLE_PAY",
  APPLE_PAY = "APPLE_PAY",
  AMAZON_PAY = "AMAZON_PAY",
  PHONE_PAY = "PHONE_PAY",
  BHIM = "BHIM",
  UPI = "UPI",
  NET_BANKING = "NET_BANKING",
  WALLET = "WALLET",
  OTHERS = "OTHERS",
}

@Entity()
export class Payment_method {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: Payment_method_type,
    default: Payment_method_type.CASH_ON_DELIVERY,
  })
  type: Payment_method_type;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
