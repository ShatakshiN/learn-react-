import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
/* import { useReducer } from "react";

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
} */

function Footer() {
  /* const [state, dispatch] = useReducer(reducer, initialState); */

  return (
    <footer className="bg-dark text-light pt-3 pb-2 mt-4 border-top border-secondary fixed-bottom">
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
