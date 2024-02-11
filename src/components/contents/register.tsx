import { useAuth } from "../../context/AuthContext";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleRegister = () => {
    login();
    navigate("/");
  };
  return (
    <section>
      <div>Register</div>
      <Button variant="primary" onClick={handleRegister}>
        Register
      </Button>
    </section>
  );
}
