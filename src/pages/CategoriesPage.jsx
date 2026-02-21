import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories.jsx";
import baseURL from "../routes/api.js";

export default function CategoriesPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadCategories() {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(`${baseURL}/categories`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const list = Array.isArray(json)
        ? json
        : (json.content ?? json.categories ?? []);
      setCategories(list);
    } catch (e) {
      setError(e?.message || "Erro ao carregar categorias");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Categories</h2>

      <button
        onClick={loadCategories}
        disabled={loading}
        style={{ padding: "8px 12px" }}
      >
        {loading ? "Carregando..." : "Carregar categorias"}
      </button>

      {error && <p style={{ color: "crimson" }}>Erro: {error}</p>}

      <div style={{ marginTop: 12 }}>
        <Categories categories={categories} />
      </div>

      <button
        onClick={() => navigate("/")}
        style={{ padding: "6px 10px", marginBottom: 12 }}
      >
        Voltar para Home
      </button>
    </div>
  );
}
