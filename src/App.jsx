
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = email.includes("employer") ? "employer" : "learner";
    const user = { email, role };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate(role === "employer" ? "/employer" : "/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Tech Rwanda" },
    { id: 2, title: "Data Analyst", company: "Kigali Analytics" }
  ];

  return (
    <div>
      <h2>Learner Dashboard</h2>
      {jobs.map(job => (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.company}</p>
          <button onClick={() => alert("Applied!")}>Apply</button>
        </div>
      ))}
    </div>
  );
}

function Employer() {
  return (
    <div>
      <h2>Employer Dashboard</h2>
      <button onClick={() => alert("Job Posted!")}>Post Job</button>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/employer">Employer</Link>
    </nav>
  );
}

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employer" element={<Employer />} />
      </Routes>
    </BrowserRouter>
  );
}
