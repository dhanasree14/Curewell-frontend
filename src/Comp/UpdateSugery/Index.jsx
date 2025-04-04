import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateSur.css";

const UpdateSurgery = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample data (Replace with API call if needed)
  const [surgeryDetails, setSurgeryDetails] = useState({
    id: id,
    doctorId: "D101",
    date: "2025-03-31",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    category: "Cardiac Surgery"
  });

  // Handle input changes
  const handleChange = (e) => {
    setSurgeryDetails({ ...surgeryDetails, [e.target.name]: e.target.value });
  };

  // Handle Save Button Click
  const handleSave = () => {
    console.log("Updated Surgery Details:", surgeryDetails);
    alert("Surgery details updated successfully!");
    navigate("/view-todays-surgery"); // Redirect back
  };

  return (
    <div className="update-surgery-container">
      <h2>Edit Surgery Details</h2>

      <label>Surgery ID:</label>
      <input type="text" value={surgeryDetails.id} disabled />

      <label>Doctor ID:</label>
      <input type="text" name="doctorId" value={surgeryDetails.doctorId} onChange={handleChange} />

      <label>Surgery Date:</label>
      <input type="date" name="date" value={surgeryDetails.date} onChange={handleChange} />

      <label>Start Time:</label>
      <input type="time" name="startTime" value={surgeryDetails.startTime} onChange={handleChange} />

      <label>End Time:</label>
      <input type="time" name="endTime" value={surgeryDetails.endTime} onChange={handleChange} />

      <label>Category:</label>
      <input type="text" name="category" value={surgeryDetails.category} onChange={handleChange} />

      <div className="buttons">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="back-btn" onClick={() => navigate("/view-todays-surgery")}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateSurgery;
