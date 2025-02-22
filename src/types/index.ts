export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Store {
  name: string;
  currency: string;
  country: string;
  domain: string;
  category: string;
  email: string;
}