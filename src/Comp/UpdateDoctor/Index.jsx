import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = () => {
    if (doctorName.trim() === '') {
      setError('Name is required');
      return;
    }

    alert(`Doctor with ID ${id} updated to name "${doctorName}"`);
    navigate('/'); // Redirect back to home
  };

  return (
    <div className="container">
      <h2>Update Doctor</h2>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>All fields are mandatory</p>

      <div className="form-group">
        <label>Doctor Id:</label>
        <input type="text" value={id} readOnly />
      </div>

      <div className="form-group">
        <label>Doctor Name:</label>
        <input
          type="text"
          value={doctorName}
          onChange={(e) => {
            setDoctorName(e.target.value);
            setError('');
          }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => navigate('/')} style={{ marginLeft: '10px', color: 'purple', background: 'none', border: 'none', cursor: 'pointer' }}>
        Cancel
      </button>
    </div>
  );
};

export default UpdateDoctor;
