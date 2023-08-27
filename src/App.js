import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import "./App.css"; // Ensure you have Tailwind classes imported in this file

function App() {
  return (
    <Router>
      <div className="bg-[#404258] min-h-screen">
        <nav className="p-4 bg-slate-600">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/test">Test</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
