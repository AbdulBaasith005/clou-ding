import { useNavigate, Link } from "react-router-dom";
import "./../App.css";

export default function Login() {
  const navigate = useNavigate();

  const loginEmailPassword = () => {
    // TODO: Implement Firebase Email/Password login
    alert("Login Logic");
    navigate("/home");
  };

  const loginWithGoogle = () => {
    // TODO: Implement Firebase Google login
    alert("Login with Google Logic");
    navigate("/home");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Login</h2>

        <input
          placeholder="Email"
          value="johndoe@gmail.com"
        />

        <input
          type="password"
          placeholder="Password"
          value="123456"
        />

        <button onClick={loginEmailPassword}>Login</button>
        <button onClick={loginWithGoogle}>Login with Google</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
