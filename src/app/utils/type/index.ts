export interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  coverImage: string;
  updatedAT: string;
}

export interface ICart extends IMenu {
  extra: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "delivery";
  password: string;
  updatedAt: string;
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
