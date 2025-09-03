import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import useEmp from "../../hooks/useEmp";
import EmployeeCard from "./empCard";

export default function EmployeeDetails() {
  const { id } = useParams<{ id: string }>();
  const { employees, loading } = useEmp();

  const employee = useMemo(() => {
    const parsed = Number(id);
    return employees.find(e => e.id === parsed);
  }, [employees, id]);

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center mb-3">
        <h2 className="mb-0">Employee Details</h2>
        <Link className="btn btn-outline-secondary ms-auto" to="/employees">Back</Link>
      </div>

      {loading ? (
        <div className="alert alert-info">Loading employee...</div>
      ) : employee ? (
        <EmployeeCard employee={employee} />
      ) : (
        <div className="alert alert-warning">Employee not found.</div>
      )}
    </div>
  );
}
