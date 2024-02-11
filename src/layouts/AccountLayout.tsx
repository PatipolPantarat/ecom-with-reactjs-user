import { Box } from "../components/box";
import { Section } from "../components/section";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Sidebar } from "../components/sidebar";
import { useAuth } from "../context/AuthContext";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout } = useAuth();
  return (
    <Section className="grid grid-cols-4 gap-2">
      <Box className="col-span-1 flex flex-col gap-5">
        <div className="w-full">
          <div className="grid place-content-center p-4 gap-5 text-dark">
            <span className="text-2xl font-medium">Account</span>
          </div>
        </div>
        <div className="flex flex-col h-full gap-1 w-full">
          <Sidebar />
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
      <Box className="col-span-3 flex">{children}</Box>
    </Section>
  );
}
