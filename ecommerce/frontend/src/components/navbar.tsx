
import "../views/navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/categories">
        <span className="fw-bold text-primary fs-4">ABC</span>
        <span className="text-dark fs-4 ms-1">Ecommerce</span>
      </Link>

      <div className="d-flex align-items-center ms-auto">
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        <div className="nav-icons d-flex align-items-center ms-3">
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person fs-5 me-1"></i>
              USER
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <Link className="dropdown-item" to="/userProfile">
                  <i className="bi bi-person me-2"></i>My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/orders">
                  <i className="bi bi-box-seam me-2"></i>Orders
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button
                  className="dropdown-item text-danger d-flex align-items-center"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>Logout
                </button>
              </li>
            </ul>
          </div>

      
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

