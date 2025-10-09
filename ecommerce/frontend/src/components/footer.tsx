import React, { useReducer } from "react";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

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

const Footer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <footer className="bg-dark text-light pt-5 mt-5 border-top border-secondary">
      <div className="container pb-4">
        <div className="row g-4">
          {/* ABOUT */}
          <div className="col-6 col-md-3">
            <h6 className="text-secondary">ABOUT</h6>
            <ul className="list-unstyled small">
              {["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Corporate Information"].map((item) => (
                <li key={item} className="my-1">
                  <a href="#" className="text-decoration-none text-light-50">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* GROUP COMPANIES */}
          <div className="col-6 col-md-3">
            <h6 className="text-secondary">GROUP COMPANIES</h6>
            <ul className="list-unstyled small">
              {["Myntra", "Cleartrip", "Shopsy"].map((item) => (
                <li key={item} className="my-1">
                  <a href="#" className="text-decoration-none text-light-50">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP */}
          <div className="col-6 col-md-3">
            <h6 className="text-secondary">HELP</h6>
            <ul className="list-unstyled small">
              {["Payments", "Shipping", "Cancellation & Returns", "FAQ"].map((item) => (
                <li key={item} className="my-1">
                  <a href="#" className="text-decoration-none text-light-50">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONSUMER POLICY */}
          <div className="col-6 col-md-3">
            <h6 className="text-secondary">CONSUMER POLICY</h6>
            <ul className="list-unstyled small">
              {[
                "Cancellation & Returns",
                "Terms Of Use",
                "Security",
                "Privacy",
                "Sitemap",
                "Grievance Redressal",
                "EPR Compliance",
              ].map((item) => (
                <li key={item} className="my-1">
                  <a href="#" className="text-decoration-none text-light-50">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TOGGLE SECTIONS */}
        <div className="mt-5">
          <div className="d-flex gap-3 mb-3">
            <button
              className={`btn btn-sm ${state.activeSection === "mail" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => dispatch({ type: "TOGGLE_SECTION", payload: "mail" })}
            >
              Mail Us
            </button>
            <button
              className={`btn btn-sm ${state.activeSection === "registered" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => dispatch({ type: "TOGGLE_SECTION", payload: "registered" })}
            >
              Registered Office
            </button>
          </div>

          {state.activeSection === "mail" ? (
            <div>
              <h6 className="text-secondary">Mail Us:</h6>
              <p className="small mb-0">
                Flipkart Internet Private Limited, <br />
                Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
                Outer Ring Road, Devarabeesanahalli Village, <br />
                Bengaluru, 560103, Karnataka, India
              </p>
            </div>
          ) : (
            <div>
              <h6 className="text-secondary">Registered Office Address:</h6>
              <p className="small mb-0">
                Flipkart Internet Private Limited, <br />
                Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
                Outer Ring Road, Devarabeesanahalli Village, <br />
                Bengaluru, 560103, Karnataka, India <br />
                CIN: U51109KA2012PTC066107 <br />
                Telephone: 044-45614700 / 044-67415800
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="bg-black text-light py-3 mt-4 border-top border-secondary">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex flex-wrap gap-3 mb-2 mb-md-0 small">
            <span className="cursor-pointer">🛍 Become a Seller</span>
            <span>📢 Advertise</span>
            <span>🎁 Gift Cards</span>
            <span>❓ Help Center</span>
          </div>

          <div className="d-flex align-items-center gap-3 small">
            <span>© 2007–2025 Flipkart.com</span>
            <div className="d-flex gap-2">
              <Facebook size={16} />
              <Twitter size={16} />
              <Youtube size={16} />
              <Instagram size={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
