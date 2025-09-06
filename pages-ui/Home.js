import { useNavigate } from "react-router-dom";
import "./../App.css";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    // TODO: Implement Firebase signOut
    alert("Logout Logic");
    navigate("/");
  };

  const goToUpdate = () => {
    // TODO: Navigate with user data once Firebase is integrated
    navigate("/update");
  };

  const deleteAccount = () => {
    // TODO: Delete user account from Firebase Auth + Firestore
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deletion logic");
      navigate("/");
    }
  };

  return (
    <div className="home-container">
      <div className="card">
        <h2 className="welcome-text">Welcome, John Doe</h2>
        <div className="info">
          <p><strong>Email:</strong> johndoe@gmail.com</p>
          <p><strong>Degree:</strong> B.Tech</p>
          <p><strong>Course:</strong> IT</p>
          <p><strong>DOB:</strong> 01-01-2000</p>
          <p><strong>City:</strong> Madurai</p>
          <p><strong>State:</strong> Tamil Nadu</p>
          <p><strong>Mobile:</strong> 9876543210</p>
        </div>

        <div className="button-group">
          <button className="update-btn" onClick={goToUpdate}>
            Update Info
          </button>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
          <button className="delete-btn" onClick={deleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
