import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum OrderState {
  NEW = 'New',
  PROCESSING = 'Processing',
  SHIPPED = 'Shipped',
  COMPLETED = 'Completed'
}

export enum OrderCurrency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  customer_name: string;
  @Column()
  address_line: string;
  @Column()
  item: string;
  @Column()
  total_price: number;
  @Column()
  total_shipping: number
  @Column()
  currency: OrderCurrency;
  @Column()
  state: OrderState;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_date_time: Date;
}