import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Orders from "../components/Orders.jsx";
import Button from "../components/buttons/Button";
import Footer from "../components/Footer";
import baseURL from "../routes/api.js";

export default function OrdersPage() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadOrders() {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(`${baseURL}/orders`);
      if (!res.ok) throw new Error(`HTTP ${res.sktatus}`);

      const json = await res.json();
      const list = Array.isArray(json)
        ? json
        : (json.content ?? json.orders ?? []);
      setOrders(list);
    } catch (e) {
      setError(e?.message || "Erro ao carregar pedidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class="flex flex-col min-h-screen">
      <div class="flex flex-col flex-grow m-12 p-6 max-w-5xl mx-auto">
        <h2 class="flex justify-center">Orders</h2>

        <Button
          onClick={loadOrders}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Carregar pedidos"}
        </Button>

        <div class="border bg-gray-200 m-9 min-inline-xs">
          <Orders orders={orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
