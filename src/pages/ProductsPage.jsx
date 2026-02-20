import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../components/Products.jsx";
import baseURL from "../routes/api.js";

export default function ProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(`${baseURL}/products`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const list = Array.isArray(json) ? json : (json.content ?? json.products ?? []);
      setProducts(list);
    } catch (e) {
      setError(e?.message || "Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      <h2>Products</h2>

      <button onClick={loadProducts} disabled={loading} style={{ padding: "8px 12px" }}>
        {loading ? "Carregando..." : "Carregar produtos"}
      </button>

      {error && <p style={{ color: "crimson" }}>Erro: {error}</p>}

      <div style={{ marginTop: 12 }}>
        <Products products={products} />
      </div>

      <button onClick={() => navigate("/")} style={{ padding: "6px 10px", marginBottom: 12 }}>
        Voltar para Home
      </button>
    </div>
  );
}