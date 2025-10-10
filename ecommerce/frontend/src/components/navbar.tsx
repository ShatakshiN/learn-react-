
import "../views/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <span className="fw-bold text-primary fs-4">ABC</span>
        <span className="text-dark fs-4 ms-1">Ecommerce</span>
      </a>

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
              <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>My Profile</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-box-seam me-2"></i>Orders</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</a></li>
            </ul>
          </div>

          <div className="cart-section ms-4 d-flex align-items-center">
            <i className="bi bi-cart fs-5 position-relative">
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">1</span>
            </i>
            {/* <span className="ms-2 ">Cart</span> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
