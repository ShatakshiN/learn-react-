import useEmp from '../../hooks/useEmp';
import './public/home.css';

function Home() {
    const { employees, loading } = useEmp();

    return (
        <div className="container py-4">
            <h2 className="mb-3">Home</h2>
            {loading ? (
                <div className="alert alert-info">Loading employees...</div>
            ) : (
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="card text-center border-0 shadow-sm">
                            <div className="card-body">
                                <div className="display-5">{employees.length}</div>
                                <div className="text-muted">Total Employees</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}




export default Home;