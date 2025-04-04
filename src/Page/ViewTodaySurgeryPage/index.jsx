import { Routes, Route } from "react-router-dom";
import ViewTodaysSurgery from "../../Comp/View Today's Surgery/Index";
import UpdateSurgery from "../../Comp/UpdateSugery/Index";

const ViewTodaySurgeryPage = () => {
    return (
      <>

        <Routes>
          <Route path="/view/today/surgery" element={<ViewTodaysSurgery />} />
          <Route path="/update-surgery/:id" element={<UpdateSurgery />} />
        </Routes>
      </>
    );
  };
  
  export default ViewTodaySurgeryPage;