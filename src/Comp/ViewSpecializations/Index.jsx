import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewSpc.css";

const ViewSpecialization = () => {
  const navigate = useNavigate();

  const specializations = [
    { code: "ANE", name: "Anesthesiologist" },
    { code: "CAR", name: "Cardiologist" },
    { code: "GYN", name: "Gynecologist" }
  ];

  return (
    <div className="container">
      <h2>View Specialization</h2>
      <table className="specialization-table">
        <thead>
          <tr>
            <th>Specialization Code</th>
            <th>Specialization Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {specializations.map((spec, index) => (
            <tr key={index}>
              <td>{spec.code}</td>
              <td>{spec.name}</td>
              <td>
                <button className="view-btn" onClick={() => navigate("/")}>
                  View Doctors
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSpecialization;
