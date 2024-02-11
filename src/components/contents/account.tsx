import { Box } from "../box";
import { Section } from "../section";
import {
  UserIcon,
  HomeModernIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
export default function Account() {
  return (
    <Section className="">
      <Box>
        <div className="flex flex-col">
          <div className="flex items-center border p-2">
            <UserIcon className="h-5 w-5" />
            User info
          </div>
          <div className="flex items-center border p-2">
            <HomeModernIcon className="h-5 w-5" />
            My address
          </div>
          <div className="flex items-center border p-2">
            <HeartIcon className="h-5 w-5" />
            Favorites
          </div>
          <div className="flex items-center border p-2">
            <TruckIcon className="h-5 w-5" />
            My orders
          </div>
        </div>
      </Box>
    </Section>
  );
}
