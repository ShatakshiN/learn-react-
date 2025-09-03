import { Link } from "react-router-dom";

type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
};

type Props = {
  employees: Employee[];
};

export default function EmployeeTable({ employees }: Props) {
  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead className="table-light">
          <tr>
            <th style={{width: 80}}>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th style={{width: 110}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>
                <Link className="btn btn-sm btn-primary" to={`/employees/${e.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
          {employees.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-muted py-4">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
