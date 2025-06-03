import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LogoutButton from "./LogoutButton";
const menuItems = [
  { label: "Dashboard", path: "/dashboard", roles: ["Manager"] },
  { label: "Products", path: "/products", roles: ["Manager", "Store Keeper"] },
  { label: "Add Product", path: "/products/add", roles: ["Manager", "Store Keeper"] },
];

export default function RoleBasedMenu() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <nav>
      {menuItems
        .filter(item => item.roles.includes(user.role))
        .map(item => (
          <Link key={item.path} to={item.path}>{item.label}</Link>
        ))}
    </nav>
  );
}
