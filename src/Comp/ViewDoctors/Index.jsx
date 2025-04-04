import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

const ViewDoctor = () => {
    const navigate = useNavigate();
  
    const doctors = [
      { id: 101, name: "Harry" },
      { id: 102, name: "Zain" },
      { id: 103, name: "Smith" },
    ];
  
    return (
      <div className="container">
        <h2 className="title">View Doctor</h2>
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Doctor Id</th>
              <th>Doctor Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => navigate(`/update-doctor/${doctor.id}`)}
                  >
                    Edit Doctor Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ViewDoctor;