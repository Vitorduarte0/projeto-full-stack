export interface Purchases {
  id: string;
  user_id: string;
  product_id: string;
  quantify: number;
  total_price: number;
  date_purchases?: string;
}
