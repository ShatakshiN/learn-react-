
type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
};


type Props = { employee: Employee };

export default function EmployeeCard({ employee }: Props) {
  const { id, name, email, department } = employee;
  return (
    <div className="card shadow-sm">
      <div className="card-header">Employee #{id}</div>
      <div className="card-body">
        <h5 className="card-title mb-3">{name}</h5>
        <ul className="list-unstyled mb-0">
          <li><strong>Email:</strong> {email}</li>
          <li><strong>Department:</strong> {department}</li>
        </ul>
      </div>
    </div>
  );
}
