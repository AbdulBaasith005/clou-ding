import { useNavigate, Link } from "react-router-dom";
import "./../App.css";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // TODO: Firebase Auth + Firestore logic
    alert("Registration logic");
    navigate("/home");
  };

  return (
    <div className="page-container">
      <div className="form-box">
        <h2>Register</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <input
            placeholder="Name"
            value="John Doe"
            required
          />

          <input
            placeholder="Email"
            type="email"
            value="johndoe@gmail.com"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value="123456"
            required
          />

          <input
            type="date"
            placeholder="DOB"
            required
          />

          <select value="B.Tech" required>
            <option value="">--Choose Degree--</option>
            <option value="B.E">B.E</option>
            <option value="B.Tech">B.Tech</option>
          </select>

          <input placeholder="Course" value="IT" required />
          <input placeholder="City" value="Madurai" required />
          <input placeholder="State" value="Tamil Nadu" required />
          <input placeholder="Contact" value="9876543210" required />

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
