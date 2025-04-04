import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/Index";
import AddDoctorPage from "./Page/AddDoctorPage/Index";
import ViewSpcPage from "./Page/ViewSpcPage/Index";
import ViewTodaySurgeryPage from "./Page/ViewTodaySurgeryPage/index";
import LoginPage from "./Page/LoginPage/Index";
import RegisterPage from "./Page/RegisterPage/Index";
import UpdateDoctor from "./Comp/UpdateDoctor/Index";
import UpdateSurgery from "./Comp/UpdateSugery/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add/doctor" element={<AddDoctorPage />} />
        <Route path="/view/spc" element={<ViewSpcPage />} />
        <Route path="/view/today/surgery" element={<ViewTodaySurgeryPage />} />
        <Route path="/update-doctor/:id" element={<UpdateDoctor />} />
        <Route path="/update-surgery/:id" element={<UpdateSurgery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;