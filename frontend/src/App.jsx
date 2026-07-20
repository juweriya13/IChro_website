import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";

import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Enquiries from "./pages/admin/Enquiries";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/*Public Website*/}

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />

      {/*Admin Authentication*/}

      <Route path="/admin/login" element={<Login />} />

      {/*Admin Panel*/}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="enquiries" element={<Enquiries />} />
      </Route>
    </Routes>
  );
}

export default App;