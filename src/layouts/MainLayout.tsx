import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <div className="max-h-16 fixed w-full z-10">
        <Navbar />
      </div>
      <div className="mt-16 pt-5 h-full">
        <Outlet />
      </div>
    </div>
  );
}
