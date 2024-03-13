import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import { Box } from "../box";
import { InputGroup } from "../input/inputbox";
// import { GoogleButton } from "../googlebutton";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { login } from "../../Slices/authSlice";
import { setCart } from "../../Slices/cartSlice";
import { getProductsFav } from "../../Slices/userSlice";
import { useState } from "react";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { userCart } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(login(input)).then(() => {
      navigate("/");
    });

    dispatch(setCart(userCart));
    dispatch(getProductsFav(["1", "2", "3"]));
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
              Login
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
          </div>
          <div className="flex justify-end">
            <span className="text-primary hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>
          <div className=" grid place-items-center">
            <Button variant="primary" onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
          <div className="grid place-items-center">
            <p>
              Don't have an account?{" "}
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </div>
          <div>
            <hr className="text-dark-300" />
          </div>
          <div className="grid place-items-center">
            {/* <GoogleButton onClick={handleLogin} text="Login with Google" /> */}
          </div>
        </div>
      </Box>
    </section>
  );
}
