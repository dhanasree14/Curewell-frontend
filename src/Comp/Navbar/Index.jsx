import "./navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          CureWell
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                View Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/view/spc">
                View Specializations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/view/today/surgery">
                View Today's Surgery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add/doctor">
                Add Doctor
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
};
export default Navbar;
