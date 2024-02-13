import { useState, useEffect } from "react";
import { Tabsbar } from "../../menubar";
import { useLocation } from "react-router-dom";
import All from "./mypurchases/all";
import Approval from "./mypurchases/approval";
import Delivery from "./mypurchases/delivery";
import Successful from "./mypurchases/successful";
import Cancel from "./mypurchases/cancel";

export default function MyPurchases() {
  const [tabURL, setTabURL] = useState<string>("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("tab");
  console.log(location.search);
  useEffect(() => {
    setTabURL(searchParams || "");
  }, [searchParams]);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between items-center border-b border-dark-300 pl-5">
        <h1 className="text-lg font-medium text-dark">My Orders</h1>
        <div className="grid grid-cols-5 text-dark">
          <Tabsbar />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {tabURL === "" || tabURL === "all" ? (
          <All />
        ) : tabURL === "approval" ? (
          <Approval />
        ) : tabURL === "delivery" ? (
          <Delivery />
        ) : tabURL === "successful" ? (
          <Successful />
        ) : (
          tabURL === "cancel" && <Cancel />
        )}
      </div>
    </div>
  );
}
