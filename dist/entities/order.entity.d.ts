export declare enum OrderState {
    NEW = "New",
    PROCESSING = "Processing",
    SHIPPED = "Shipped",
    COMPLETED = "Completed"
}
export declare enum OrderCurrency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP"
}
export declare class Order {
    id: string;
    customer_name: string;
    address_line: string;
    item: string;
    total_price: number;
    total_shipping: number;
    currency: OrderCurrency;
    state: OrderState;
    create_date_time: Date;
}
