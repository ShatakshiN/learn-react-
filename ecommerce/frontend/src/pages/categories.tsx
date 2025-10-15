
import  { useEffect, useReducer } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

/* interface Category {
  id: number;
  category: string;
  icon_image_url: string;
}


interface State {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: Category[] }
  | { type: "FETCH_FAILURE"; payload: string };

const initialState: State = {
  categories: [],
  loading: false,
  error: null,
};


function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { categories: action.payload, loading: false, error: null };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function CategoryPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { categories, loading, error } = state;

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await api.get("/Product-Categories");
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.data.categoryList });
      } catch (err: any) {
        dispatch({ type: "FETCH_FAILURE", payload: err.message || "Error fetching categories" });
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Categories</h2>
      {loading && <p>Loading categories...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-3 mb-4" key={cat.id}>
            <div className="card h-100">
              <img
                src={cat.icon_image_url || "/uploads/default.png"}
                className="card-img-top"
                alt={cat.category}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cat.category}</h5>
                <button className="btn btn-primary mt-auto">
                  View Subcategories
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

 */


interface Category {
  id: number;
  category: string;
  icon_image_url: string;
  parent_id: number | null;
}

interface State {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: Category[] }
  | { type: "FETCH_FAILURE"; payload: string };

const initialState: State = {
  categories: [],
  loading: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { categories: action.payload, loading: false, error: null };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function CategoryPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { categories, loading, error } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await api.get("/Product-Categories");
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data.data.categoryList,
        });
      } catch (err: any) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: err.message || "Error fetching categories",
        });
      }
    };

    fetchCategories();
  }, []);

  const handleViewSubcategories = (catId: number, catName: string) => {
    navigate(`/subCategories/${catId}`, { state: { categoryName: catName } });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Categories</h2>
      {loading && <p>Loading categories...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-3 mb-4" key={cat.id}>
            <div className="card h-100">
              <img
                src={cat.icon_image_url || "/uploads/default.png"}
                className="card-img-top"
                alt={cat.category}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cat.category}</h5>
                {(
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() =>
                      handleViewSubcategories(cat.id, cat.category)
                    }
                  >
                    View Subcategories
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
