import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import api from "../api/axiosInstance";

interface Category {
  id: number;
  category: string;
  parent_id: number | null;
}

export default function SubCategoryPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const categoryName = (location.state as any)?.categoryName || "Category";

  const [subcategories, setSubcategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/Product-Sub-Categories/${id}`);
        setSubcategories(response.data.data.subcatList);
      } catch (err: any) {
        setError(err.message || "Error fetching subcategories");
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{categoryName} - Subcategories</h2>
      <Link to="/categories" className="btn btn-secondary mb-3">Back to Categories</Link>

      {loading && <p>Loading subcategories...</p>}
      {error && <p className="text-danger">{error}</p>}

      {subcategories.length > 0 ? (
              <ul className="list-group">
                  {subcategories.map((sub) => (
                      <li key={sub.id} className="list-group-item d-flex justify-content-between align-items-center">
                          <span>{sub.category}</span>
                          <button className="btn btn-link btn-sm">View All</button>
                      </li>
                  ))}
              </ul>
          ) : (
              !loading && <p>No subcategories found.</p>
          )}



    </div>
  );
}
