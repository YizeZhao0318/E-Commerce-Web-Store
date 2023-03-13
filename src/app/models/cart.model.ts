export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
//we are making the definition of the data
//that we are going to receive and pass through the application
