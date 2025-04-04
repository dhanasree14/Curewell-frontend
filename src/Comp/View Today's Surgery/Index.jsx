import React from "react";
import { useNavigate } from "react-router-dom";
import "./vts.css";

const ViewTodaysSurgery = () => {
  const navigate = useNavigate();

  const surgeries = [
    { id: 1, doctorId: "D101", date: "2025-03-31", startTime: "10:00 AM", endTime: "12:00 PM", category: "Cardiac Surgery" },
    { id: 2, doctorId: "D102", date: "2025-03-31", startTime: "1:00 PM", endTime: "3:00 PM", category: "Neurosurgery" },
    { id: 3, doctorId: "D103", date: "2025-03-31", startTime: "4:00 PM", endTime: "6:00 PM", category: "Orthopedic Surgery" }
  ];

  return (
    <div className="container">
      <h2>Today's Surgeries</h2>
      <table className="surgery-table">
        <thead>
          <tr>
            <th>Surgery ID</th>
            <th>Doctor ID</th>
            <th>Surgery Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {surgeries.map((surgery) => (
            <tr key={surgery.id}>
              <td>{surgery.id}</td>
              <td>{surgery.doctorId}</td>
              <td>{surgery.date}</td>
              <td>{surgery.startTime}</td>
              <td>{surgery.endTime}</td>
              <td>{surgery.category}</td>
              <td>
                <button className="edit-btn" onClick={() => navigate(`/update-surgery/${surgery.id}`)}>
                  Edit Surgery Time
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTodaysSurgery;
