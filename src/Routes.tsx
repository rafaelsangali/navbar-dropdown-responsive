import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Private from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router>
          <Route path="/" element={<Private><Home /></Private>} />
          <Route path="/login" element={<Login />} />
        </Router>
      </AuthProvider>
    </BrowserRouter>
  );
}
