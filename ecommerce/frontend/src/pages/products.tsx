import { useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";

interface Image {
  id: number;
  image_url: string;
}

interface Variant {
  id: number;
  SKU: string;
  price: string;
  stock: number;
  images: Image[];
}

interface Product {
  id: number;
  product_name: string;
  description: string;
  brand: string;
  base_SKU: string;
  variants: Variant[];
}

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: Product[] }
  | { type: "FETCH_FAILURE"; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function ProductsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, loading, error } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        if (!id) {
          dispatch({ type: "FETCH_FAILURE", payload: "Category ID is required" });
          return;
        }

        const response = await api.get(`/products/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });
      } catch (err: any) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: err.response?.data?.message || "Failed to fetch products",
        });
      }
    };

    fetchProducts();
  }, [id]);

  const handleViewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="alert alert-danger mt-5 text-center">{error}</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => {
          const firstVariant = product.variants[0];
          const imageUrl =
            firstVariant?.images[0]?.image_url || "https://via.placeholder.com/300x200";
          const price = firstVariant?.price || "N/A";

          return (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={product.product_name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.product_name}</h5>
                  {/* <p className="card-text fw-bold">₹ {price}</p> */}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewProduct(product.id)}
                  >
                    View all Product variants
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

