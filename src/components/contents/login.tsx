import { useAuth } from "../../context/AuthContext";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <section>
      <div>Login</div>
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </section>
  );
}
