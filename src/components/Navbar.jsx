import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav class="flex flex-row text-white gap-30 bg-slate-800 p-8 border-b">
      <div class="flex flex-row items-center">
        <a href="/" class="flex flex-row items-center">
          <img src={logo} alt="Logo" className="h-13 w-auto" />
          <span class="text-3xl">MarshMallowAPI</span>
        </a>
      </div>
      <div class="flex flex-row items-center gap-12">
        <Link to="/users">Users</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}
