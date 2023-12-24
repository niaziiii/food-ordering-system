import React from "react";
import { IOrder } from "@/app/utils/type";
import { StatusBadge, Badge, formatDate } from "./utils";

export const TabContent = ({ orderData }: { orderData: IOrder[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {orderData?.map((cart: IOrder, i: number) => {
        return (
          <div key={i}>
            <ListedOrder data={cart} index={i} />
          </div>
        );
      })}
    </div>
  );
};
const ListedOrder = ({ data, index }: { data: IOrder; index: number }) => {
  const { deliveryId, status, orderData, userId, _id, updatedAt, totalAmount } =
    data;

  return (
    <div className=" flex flex-col bg-white rounded-[10px] p-4 md:w-full ">
      <div className="flex justify-between w-full items-center flex-wrap">
        <Badge name={` Order #${_id}`} classNames="bg-main text-white" />
        <Badge
          name={`${formatDate(updatedAt)}`}
          classNames="bg-gray text-white"
        />
      </div>
      <div className="flex flex-col mt-4 w-[80%] m-auto">
        <div className="flex flex-col gap-4">
          {orderData.length &&
            orderData.map((order, i) => (
              <div className="flex gap-4 items-center">
                <p>
                  {i + 1}
                  {")"} {order.name} {order.quantity}X
                </p>
                <img
                  src={order.coverImage}
                  className="w-[50px] rounded-[10px]"
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-2">
        <StatusBadge status={status} />
      </div>
      <div className="flex justify-between items-center mt-4 w-[80%] m-auto">
        <h3 className="text-xl font-bold">Pay (while receiving food)</h3>
        <b> ${totalAmount}</b>
      </div>
      {/* <div>
        <Image
          src={data.coverImage}
          alt="card-image"
          className="lg:w-[10rem]"
          width={"300"}
          height={200}
        />
      </div>
      <div className="px-1 md:px-4">
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="mt-1">{data.description}</p>
        <div className="flex items-center mt-2">
          <button className="text-red flex items-center gap-3 font-semibold">
            Delete item <MdDelete />
          </button>
          <b className="ml-4 text-green">{data.price}$</b>
        </div>
      </div>
      <div className="hidden md:flex ml-auto">
        <IncrementDecrement index={index} quantity={data.quantity} />
      </div>
      <div className="flex md:hidden">
        <IncrementDecrement
          mobile={true}
          index={index}
          quantity={data.quantity}
        />
      </div> */}
    </div>
  );
};

export default ListedOrder;
