export interface IProduct {
  id: number;
  isFav: boolean;
  name: string;
  image: string;
  price: number;
  sold: number;
  category?: string;
}

export interface ISpecMenu {
  id: number;
  name: string;
  product: {
    name: string;
    image?: string;
    price?: number;
  };
}
