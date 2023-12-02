import { IUser } from "@/app/utils/type";

export const allData: IUser[] = [
  {
    id: "adm1-1",
    name: "Test-admin",
    email: "admin@mail.com",
    role: "admin",
    password: "admin123",
    updatedAt: "2-11-23",
    address: "no address",
    dob: "2-2-2",
  },
  {
    id: "user1-1",
    name: "Test-user",
    email: "user@mail.com",
    role: "user",
    password: "user123",
    updatedAt: "2-12-23",
    address: "no address",
    dob: "2-2-2",
  },
  {
    id: "delivery1-1",
    name: "Test-delivery",
    email: "delivery@mail.com",
    role: "delivery",
    password: "delivery123",
    updatedAt: "2-12-23",
    address: "no address",
    dob: "2-2-2",
  },
];
