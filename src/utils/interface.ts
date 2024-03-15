export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  sold: number;
  image: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
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
  _id: string;
  email: string;
  password: string;
  role: string;
  fullName: string;
  phoneNumber: string;
  imageUrl: string;
  favorites: string[];
  addresses: IAddress[];
  orders: IOrder[];
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
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

export interface IAddress {
  _id?: string;
  userId: string;
  name: string;
  phone: string;
  address: string;
  province?: string;
  district?: string;
  subdistrict?: string;
  zipCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICategory {
  _id: string;
  name: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}

export interface IOrder {
  _id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total_price: number;
  shippingAddress: IAddress;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}
