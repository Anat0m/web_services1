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
  @Column('float')
  total_price: number;
  @Column('float')
  total_shipping: number
  @Column({
    type: 'enum',
    enum: OrderCurrency,
    default: OrderCurrency.EUR
  })
  currency: OrderCurrency;
  @Column({
    type: 'enum',
    enum: OrderState,
    default: OrderState.NEW
  })
  state: OrderState;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_date_time: Date;
}