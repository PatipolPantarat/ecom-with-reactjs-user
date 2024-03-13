export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  sold: number;
  category: string;
  stock: number;
  description: string;
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

export interface ICartItem {
  totalItems: number;
  eachItem: {
    amount: number;
    product: IProduct;
  }[];
  totalPrice: number;
}

export interface IUser {
  userProfile: {
    full_name: string;
    birth_date: string;
    phone: string;
    email: string;
    imageURL: string;
  };
  userAddress: {
    id: string;
    name: string;
    phone: string;
    address: string;
  }[];
  userFav: IProduct[];
  userPurchase: string[];
  userCart: {
    amount: number;
    productId: string;
  }[];
}

export interface CardProps {
  product: IProduct;
  cardClick: (id: string) => void;
}

export interface FavCardProps extends CardProps {
  isFav: boolean;
  favClick: (
    productId: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

export interface SetSpecCardProps {
  product: IProduct;
  detailClick: (id: string) => void;
  setSpecClick: (id: string) => void;
}
