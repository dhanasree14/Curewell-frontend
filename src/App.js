import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Page/HomePage/Index';
import AddDoctorPage from './Page/AddDoctorPage/Index';
import ViewSpcPage from './Page/ViewSpcPage/Index';
import ViewTodaySurgeryPage from './Page/ViewTodaySurgeryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
        <AddDoctorPage/>
        <ViewSpcPage/>
        <ViewTodaySurgeryPage/>
      </div>
    </Router>
  );
}

export default App;

