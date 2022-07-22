import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Router>
      </AuthProvider>
    </BrowserRouter>
  );
}
