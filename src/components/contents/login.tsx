import { useAuth } from "../../context/AuthContext";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import { Section } from "../section";
import { Box } from "../box";
import { InputGroup } from "../input/inputbox";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <Section className="">
      <Box className="flex flex-col gap-5">
        <div className="border">
          <h1 className="text-3xl font-medium text-dark">Login</h1>
        </div>
        <div className="border">
          <InputGroup label="Email" />
          <InputGroup label="Password" />
        </div>
        <div className="border">
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Box>
    </Section>
  );
}
