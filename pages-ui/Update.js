import { useNavigate } from "react-router-dom";
import "./../App.css";

export default function Update() {
  const navigate = useNavigate();

  const handleUpdate = () => {
    // TODO: Firebase update logic
    alert("Update Logic");
    navigate("/home");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Update Profile</h2>

        <input value="John Doe" readOnly />
        <input value="johndoe@gmail.com" readOnly />

        <label>DOB</label>
        <input type="date"/>

        <label>Degree</label>
        <select value="B.Tech">
          <option value="">--Choose Degree--</option>
          <option value="B.E">B.E</option>
          <option value="B.Tech">B.Tech</option>
        </select>

        <input placeholder="Course" value="IT" required />
        <input placeholder="City" value="Madurai" required />
        <input placeholder="State" value="Tamil Nadu" required />
        <input placeholder="Contact" value="9876543210" required />

        <button className="submit-btn" onClick={handleUpdate}>
          Save Changes
        </button>
        <button className="submit-btn" onClick={() => navigate("/home")}>
          Back
        </button>
      </div>
    </div>
  );
}
