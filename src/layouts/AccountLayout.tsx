import { Box } from "../components/box";
import { Section } from "../components/section";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { AccountMenuBar } from "../components/menubar";
import { Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { logout } from "../Slices/authSlice";

export default function AccountLayout() {
  const { userProfile } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Section className="grid grid-cols-4 gap-2">
      <Box className="col-span-1 flex flex-col gap-5 h-fit">
        <div className="w-full">
          <div className="flex flex-col items-center p-4 gap-5 text-dark">
            <div className="border border-dark-300 rounded-full">
              <img
                src={userProfile.image}
                alt="#"
                className="rounded-full h-24 w-24"
              />
            </div>
            <span className="text-2xl font-medium text-center">
              {userProfile.username}
            </span>
          </div>
        </div>
        <div className="flex flex-col h-full gap-1 w-full">
          <hr className="text-dark-300" />
          <AccountMenuBar />
          <hr className="text-dark-300" />
        </div>
        <div className="w-full py-1">
          <div
            onClick={() => dispatch(logout())}
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
