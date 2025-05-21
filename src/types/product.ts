export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}