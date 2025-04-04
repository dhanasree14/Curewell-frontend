import { Routes, Route } from "react-router-dom";
import AddDoctor from "../../Comp/AddDoctor/Index";

const AddDoctorPage = () => {
    return (
      <>

        <Routes>
          <Route path="/add/doctor" element={<AddDoctor />} />
          
        </Routes>
      </>
    );
  };
  
  export default AddDoctorPage;