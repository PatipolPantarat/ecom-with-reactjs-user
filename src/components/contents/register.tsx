import { Button } from "../button";
import { Box } from "../box";
import { InputGroup } from "../input/inputbox";
import { GoogleButton } from "../googlebutton";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleRegister = () => {
    alert("register completed");
    navigate("/login");
  };
  return (
    <section className="max-w-[1024px] mx-auto">
      <Box className="grid grid-cols-5 place-items-center">
        <div className=" col-span-3 h-full w-full grid place-items-center">
          <img src="https://via.placeholder.com/500x500" alt="#" />
        </div>
        <div className="px-10 py-5 flex flex-col gap-5 col-span-2 h-full w-full justify-center">
          <div className=" p-2">
            <h1 className="text-3xl font-medium text-dark text-center">
              Register
            </h1>
          </div>
          <div className=" flex flex-col gap-5">
            <InputGroup label="Email" />
            <InputGroup label="Password" />
            <InputGroup label="Confirm Password" />
          </div>

          <div className=" grid place-items-center">
            <Button
              variant="primary"
              onClick={handleRegister}
              className="w-full"
            >
              Register
            </Button>
          </div>
          <div className="grid place-items-center">
            <p>
              Already have an account?{" "}
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
          <div>
            <hr className="text-dark-300" />
          </div>
          <div className="grid place-items-center">
            <GoogleButton
              onClick={handleRegister}
              text="Register with Google"
            />
          </div>
        </div>
      </Box>
    </section>
  );
}
