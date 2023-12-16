export const userTableHeaders = [
  "#No",
  "Name",
  "Email",
  "Role",
  "Phone",
  "Updated",
  "Delete",
];
export const menuTableHeaders = [
  "#No",
  "Cover",
  "Name",
  "Category",
  "Price",
  "Updated",
  "Delete",
];

export const TableHeaderList = ({ row }: { row: any }) => {
  return (
    <tr>
      {row.map((ro: string) => (
        <th scope="col" className="px-6 py-3" key={ro}>
          {ro}
        </th>
      ))}
    </tr>
  );
};
export const UserLists = ({ users }: { users: any }) => {
  return users?.map((user: any, i: any) => (
    <tr className=" border-b" key={i}>
      <td className="px-6 py-4">{i + 1}</td>
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {user.name}
      </th>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">{user.updatedAt}</td>
      <td className="px-6 py-4 text-red">Delete</td>
    </tr>
  ));
};

export const MenuLists = ({ menus }: { menus: any }) => {
  return menus?.map((menu: any, i: any) => (
    <tr className=" border-b" key={i}>
      <td className="px-6 py-4">{i + 1}</td>

      <td className="px-6 py-4">
        <img src={menu.coverImage} alt="" />
      </td>
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {menu.name}
      </th>
      <td className="px-6 py-4">{menu.category}</td>

      <td className="px-6 py-4">{menu.price}</td>
      <td className="px-6 py-4">{menu.updatedAT}</td>
      <td className="px-6 py-4 text-red">Delete</td>
    </tr>
  ));
};
