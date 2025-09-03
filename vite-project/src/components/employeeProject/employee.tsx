import type{FormEvent} from 'react';
import {  useMemo, useState } from "react";
import EmployeeTable from "./empTable";
import useEmp from "../../hooks/useEmp";

export default function Employees() {
  const { employees, loading, newEmp } = useEmp();
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name: "", email: "", department: "" });

  
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return q ? employees.filter(e => e.name.toLowerCase().includes(q)) : employees;
  }, [employees, search]);

  
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.department) return;
    newEmp(form); 
    setForm({ name: "", email: "", department: "" });
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mb-0">Employees</h2>
        <input
          className="form-control w-auto"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="alert alert-info">Loading employees...</div>
      ) : (
        <>
          <EmployeeTable employees={filtered} />

          <hr className="my-4" />
          <h4 className="mb-3">Add Employee</h4>
          <form className="row gy-2 gx-3 align-items-end" onSubmit={onSubmit}>
            <div className="col-md-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Department</label>
              <input
                className="form-control"
                value={form.department}
                onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-success w-100" type="submit">
                Add
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
