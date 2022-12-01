import { BsTruck, BsPerson } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const transactionHist = [
  {
    Receiver: "Tesco Market",
    Type: "Shopping",
    Date: "03 Dec 2020",
    Amount: "$75.62",
    icon: <AiOutlineShoppingCart />,
  },
  {
    Receiver: "ElectroMen Market",
    Type: "Shopping",
    Date: "14 Dec 2020",
    Amount: "$250.00",
    icon: <BsTruck />,
  },
  {
    Receiver: "Fiorgio Restaurant",
    Type: "Food",
    Date: "07 Dec 2020",
    Amount: "$18.42",
    icon: <BiRestaurant />,
  },
  {
    Receiver: "John Matthew Kane",
    Type: "Sport",
    Date: "06 Dec 2020",
    Amount: "$352",
    icon: <BsPerson />,
  },
  {
    Receiver: "Ann Malin",
    Type: "Shopping",
    Date: "25 Nov 2020",
    Amount: "$425",
    icon: <BsPerson />,
  },
];
