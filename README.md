# Order Management system

## How to start the project
<p>
Clone the repository<br/>
Make a copy of .env.sample file and rename it to .env<br/>
Adjust variables to your liking: [API_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD]<br>
run: docker-compose up
</p>

## Types

>OrderState {<br>
>  'New',<br>
>  'Processing',<br>
>  'Shipped',<br>
>  'Completed'<br>
>}

>OrderCurrency {<br>
>  'USD',<br>
>  'EUR',<br>
>  'GBP'<br>
>}

>Order {<br>
>  id: string; //uuidv4<br>
>  customer_name: string;<br>
>  address_line: string;<br>
>  item: string;<br>
>  total_price: number;<br>
>  total_shipping: number<br>
>  currency: OrderCurrency;<br>
>  state: OrderState;<br>
>  create_date_time: Date;<br>
>}<br>

#### Order

## REST API Requests

### Get all orders

#### Request

`GET /orders`

### Get single order

#### Request

`GET /orders/id`

### Create order

#### Request

`POST /orders`

### Delete order

#### Request

`DELETE /orders/id`

### Update order

#### Request

`PUT /orders/id`
