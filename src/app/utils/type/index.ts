export interface ICart {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  coverImage: string;
  quantity: number;
}

export interface IMenu {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  coverImage: string;
  updatedAT: string;
}

export interface IUser {
  id: string | "xyz-1";
  name: string;
  email: string;
  role: "admin" | "user" | "delivery";
  password: string;
  updatedAt: string;
  dob: string;
  address: string;
}

export interface IOrder {
  id: string;
  user: string;
  delivery_person: string;
  updatedAt: string;
  status:
    | "Order Recived! Food preparing..."
    | "Looking for delivery person to pick..."
    | "Rider picked your food."
    | "Food delivered!";
  menu: IMenu[];
  payment: "paid" | "on-delivery";
  price: 90;
}
