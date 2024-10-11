import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="capoo.gif" width="50" /> My Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/experience">Experience</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/misc">Misc</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
