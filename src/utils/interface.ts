export interface IProduct {
  id: string;
  isFav: boolean;
  name: string;
  image: string;
  price: number;
  sold: number;
  category: string;
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

export interface CardProps {
  item: IProduct;
  favClick: (id: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  // cardClick: (id: string) => void;
}

export interface SetSpecCardProps {
  item: IProduct;
  detailClick: (id: string) => void;
  setSpecClick: (id: string) => void;
}
