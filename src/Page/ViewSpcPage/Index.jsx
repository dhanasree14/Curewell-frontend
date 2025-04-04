import { Routes, Route } from "react-router-dom";
import ViewSpecialization from "../../Comp/ViewSpecializations/Index";
import ViewDoctor from "../../Comp/ViewDoctors/Index";

const ViewSpcPage = () => {
    return (
      <>

        <Routes>
          <Route path="/view/spc" element={<ViewSpecialization />} />

        </Routes>
      </>
    );
  };
  
  export default ViewSpcPage;