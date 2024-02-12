import { Box } from "../components/box";
import { Section } from "../components/section";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Sidebar } from "../components/sidebar";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

export default function AccountLayout() {
  const { logout } = useAuth();
  return (
    <Section className="grid grid-cols-4 gap-2">
      <Box className="col-span-1 flex flex-col gap-5 h-fit">
        <div className="w-full">
          <div className="grid place-content-center p-4 gap-5 text-dark">
            <img
              src="https://via.placeholder.com/500x500"
              alt="#"
              className="rounded-full h-24 w-24"
            />
            <span className="text-2xl font-medium text-center">Account</span>
          </div>
        </div>
        <div className="flex flex-col h-full gap-1 w-full">
          <hr className="text-dark-300" />
          <Sidebar />
          <hr className="text-dark-300" />
        </div>
        <div className="w-full py-1">
          <div
            onClick={() => logout()}
            className="flex items-center font-medium py-3 px-4 gap-5 hover:bg-danger-light duration-150 text-danger rounded-md cursor-pointer"
          >
            <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
            <span>Logout</span>
          </div>
        </div>
      </Box>
      <Box className="col-span-3 flex flex-col">
        <Outlet />
      </Box>
    </Section>
  );
}
