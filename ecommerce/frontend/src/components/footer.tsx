import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useReducer } from "react";

type Section = "mail" | "registered";

interface State {
  activeSection: Section;
}

type Action = { type: "TOGGLE_SECTION"; payload: Section };

const initialState: State = {
  activeSection: "mail",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_SECTION":
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}

function Footer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <footer className="bg-dark text-light pt-3 pb-2 mt-4 border-top border-secondary fixed-bottom">
      <div className="container pb-2">
        <div className="row g-3">
          
          <div className="col-6 col-md-3">
            <h6 className="text-secondary small mb-2">ABOUT</h6>
            <ul className="list-unstyled small mb-0">
              {["Contact Us", "About Us", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-decoration-none text-light-50">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-6 col-md-3">
            <h6 className="text-secondary small mb-2">GROUP COMPANIES</h6>
            <ul className="list-unstyled small mb-0">
              {["Myntra", "Cleartrip", "Shopsy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-decoration-none text-light-50">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-6 col-md-3">
            <h6 className="text-secondary small mb-2">HELP</h6>
            <ul className="list-unstyled small mb-0">
              {["Payments", "Shipping", "Returns"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-decoration-none text-light-50">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-6 col-md-3">
            <h6 className="text-secondary small mb-2">POLICY</h6>
            <ul className="list-unstyled small mb-0">
              {["Terms Of Use", "Privacy", "Sitemap"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-decoration-none text-light-50">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="mt-3">
          <div className="d-flex gap-2 mb-2">
            <button
              className={`btn btn-sm px-2 py-1 ${
                state.activeSection === "mail" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => dispatch({ type: "TOGGLE_SECTION", payload: "mail" })}
            >
              Mail Us
            </button>
            <button
              className={`btn btn-sm px-2 py-1 ${
                state.activeSection === "registered" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => dispatch({ type: "TOGGLE_SECTION", payload: "registered" })}
            >
              Registered Office
            </button>
          </div>

          <div className="small">
            {state.activeSection === "mail" ? (
              <p className="mb-0">
                abc Pvt. Ltd., <br />
                Embassy Tech Village, Bengaluru, India
              </p>
            ) : (
              <p className="mb-0">
                abc Internet Pvt. Ltd., CIN: U51109KA2012PTC066107 <br />
                Ph: 044-45614700
              </p>
            )}
          </div>
        </div>
      </div>

      
      <div className="bg-black text-light py-2 mt-3 border-top border-secondary">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <div className="d-flex flex-wrap gap-2 mb-1 mb-md-0">
            <span>Seller</span>
            <span>Advertise</span>
            <span>Gift Cards</span>
            <span>Help</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span>© 2025 Ecommerce App</span>
            <Facebook size={14} />
            <Twitter size={14} />
            <Youtube size={14} />
            <Instagram size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
