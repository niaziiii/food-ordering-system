export const Badge = ({
  name,
  classNames,
}: {
  name: string;
  classNames: string;
}) => {
  return (
    <div className={` shadow-lg rounded-[5px] border py-1 px-3 ${classNames}`}>
      <p> {name}</p>
    </div>
  );
};

export const StatusBadge = ({ status }: { status: any }) => {
  if (status === "Pending") {
    return (
      <Badge
        classNames="bg-red text-black"
        name="Waiting for the restaurant to check your food request."
      />
    );
  }
  if (status === "Received") {
    return (
      <Badge
        classNames="bg-green text-black"
        name="The restaurant has received your request. Preparing your food."
      />
    );
  }
  if (status === "Ready") {
    return (
      <Badge
        classNames="bg-green text-black"
        name="Your food is ready, waiting for the delivery person."
      />
    );
  }
  if (status === "Pickup") {
    return (
      <Badge
        classNames="bg-green text-black"
        name="Your rider has picked up your food."
      />
    );
  }
  if (status === "Delivered") {
    return (
      <Badge
        classNames="bg-green text-black"
        name="Your food has been delivered."
      />
    );
  }
};

export function formatDate(timestamp: any) {
  // Create a new Date object using the timestamp
  const date = new Date(+timestamp);

  // Get day, month, and year
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

  // Combine into the desired format
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
