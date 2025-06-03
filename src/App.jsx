import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ProductsList from "./components/ProductsList";
import ProductForm from "./components/ProductForm";
import RoleBasedMenu from "./components/RoleBasedMenu";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <RoleBasedMenu />
          <ThemeToggle />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute roles={["Manager"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute roles={["Manager", "Store Keeper"]}>
                  <ProductsList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/add"
              element={
                <ProtectedRoute roles={["Manager", "Store Keeper"]}>
                  <ProductForm />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
