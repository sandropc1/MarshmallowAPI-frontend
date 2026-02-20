import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav style={{
      display: "flex",
      gap: 16,
      padding: "12px 16px",
      borderBottom: "1px solid #ddd"
    }}>
      <Link
        to="/"
        style={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}
      >
        Home
      </Link>

      <Link
        to="/users"
        style={{ fontWeight: location.pathname === "/users" ? "bold" : "normal" }}
      >
        Users
      </Link>

      <Link
        to="/orders"
        style={{ fontWeight: location.pathname === "/orders" ? "bold" : "normal" }}
      >
        Orders
      </Link>
      <Link
        to="/categories"
        style={{ fontWeight: location.pathname === "/orders" ? "bold" : "normal" }}
      >
        Categories
      </Link>
      <Link
        to="/products"
        style={{ fontWeight: location.pathname === "/orders" ? "bold" : "normal" }}
      >
        Products
      </Link>
    </nav>
  );
}