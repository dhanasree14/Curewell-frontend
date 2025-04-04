import { Routes, Route } from "react-router-dom";
import Navbar from "../../Comp/Navbar/Index";
import ViewDoctor from "../../Comp/ViewDoctors/Index";
import UpdateDoctor from "../../Comp/UpdateDoctor/Index";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewDoctor />} />
        <Route path="/update-doctor/:id" element={<UpdateDoctor />} />
      </Routes>
    </>
  );
};

export default HomePage;
