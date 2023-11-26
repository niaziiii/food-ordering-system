import { IOrder } from "@/app/utils/type";

export const allData: IOrder[] = [
  {
    id: "order-xyz1",
    user: "user-xyz-1",
    delivery_person: "delivery-xyz-1",
    updatedAt: "2-11-12",
    status: "Looking for delivery person to pick...",
    menu: [
      {
        id: "1-6",
        name: "Grilled Salmon with Lemon Butter Sauce",
        description:
          "Savor the goodness of grilled salmon drizzled with a zesty lemon butter sauce, a perfect dish for seafood lovers.",
        price: 18,
        category: "Seafood",
        coverImage: "/image-card.jpg",
        updatedAT: "20 12 2023",
      },
      {
        id: "1-6",
        name: "Grilled Salmon with Lemon Butter Sauce",
        description:
          "Savor the goodness of grilled salmon drizzled with a zesty lemon butter sauce, a perfect dish for seafood lovers.",
        price: 18,
        category: "Seafood",
        coverImage: "/image-card.jpg",
        updatedAT: "20 12 2023",
      },
    ],
    payment: "paid",
    price: 90,
  },
  {
    id: "order-xyz2",
    user: "user-xyz-1",
    delivery_person: "delivery-xyz-1",
    updatedAt: "2-11-12",
    status: "Looking for delivery person to pick...",
    menu: [
      {
        id: "1-6",
        name: "Grilled Salmon with Lemon Butter Sauce",
        description:
          "Savor the goodness of grilled salmon drizzled with a zesty lemon butter sauce, a perfect dish for seafood lovers.",
        price: 18,
        category: "Seafood",
        coverImage: "/image-card.jpg",
        updatedAT: "20 12 2023",
      },
      {
        id: "1-6",
        name: "Grilled Salmon with Lemon Butter Sauce",
        description:
          "Savor the goodness of grilled salmon drizzled with a zesty lemon butter sauce, a perfect dish for seafood lovers.",
        price: 18,
        category: "Seafood",
        coverImage: "/image-card.jpg",
        updatedAT: "20 12 2023",
      },
    ],
    payment: "paid",
    price: 90,
  },
];
