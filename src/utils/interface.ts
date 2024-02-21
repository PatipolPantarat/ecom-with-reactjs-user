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
    username: string;
    fullname: string;
    email: string;
    phone: string;
    imageURL: string;
  };
  userAddress: {
    name: string;
    address: string;
  }[];
  userFav: IProduct[];
  userPurchase: string[];
  userCart: ICartItem;
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
