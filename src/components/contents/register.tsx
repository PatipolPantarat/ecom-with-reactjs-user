import { Button } from "../button";
import { Box } from "../box";
import { InputGroup } from "../input/inputbox";
// import { GoogleButton } from "../googlebutton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { register } from "../../Slices/authSlice";

export default function Register() {
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleRegister = () => {
    // Check if passwords match
    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Call API
    dispatch(register(input)).then(() => {
      navigate("/");
    });
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
            <InputGroup
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <InputGroup
              label="Password"
              id="password"
              name="password"
              type="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <InputGroup
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
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
            {/* <GoogleButton
              onClick={handleRegister}
              text="Register with Google"
            /> */}
          </div>
        </div>
      </Box>
    </section>
  );
}
