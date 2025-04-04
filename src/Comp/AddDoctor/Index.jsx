import React, { useState } from "react";
import "./AddDoctor.css";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Doctor "${doctorName}" added successfully!`);
    setDoctorName("");
  };

  return (
    <div className="container">
      <h2>Add a new Doctor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Doctor Name</strong>&nbsp;
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Doctor</button>&nbsp;
        <a href="/" className="cancel">Cancel</a>
      </form>
    </div>
  );
};

export default AddDoctor;
