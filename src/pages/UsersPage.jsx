import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../components/Users.jsx";
import UsersActions from "../components/users/UsersActions.jsx";
import CreateUserForm from "../components/users/CreateUserForm.jsx";
import baseURL from "../routes/api.js";

export default function UsersPage() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  async function loadUsers() {
    try {
      setError("");
      setLoadingList(true);

      const res = await fetch(`${baseURL}/users`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const list = Array.isArray(json) ? json : (json.content ?? json.users ?? []);
      setUsers(list);
    } catch (e) {
      setError(e?.message || "Erro ao carregar usuários");
    } finally {
      setLoadingList(false);
    }
  }

  async function createUser(payload) {
    try {
      setError("");
      setCreating(true);

      const res = await fetch(`${baseURL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `HTTP ${res.status}`);
      }

      const created = await res.json().catch(() => null);

      if (created) setUsers((prev) => [created, ...prev]);
      else await loadUsers();

      setShowForm(false);
    } catch (e) {
      setError(e?.message || "Erro ao criar usuário");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div>
      <h2>Usuários</h2>

      <UsersActions
        usersCount={users.length}
        onLoad={loadUsers}
        onToggleForm={() => setShowForm((v) => !v)}
        loading={loadingList}
        creating={creating}
        showForm={showForm}
      />

      {error && <p style={{ color: "crimson" }}>Erro: {error}</p>}

      {showForm && (
        <CreateUserForm
          onSubmit={createUser}
          loading={creating}
        />
      )}

      <div style={{ marginTop: 12 }}>
        <Users users={users} />
      </div>

      <button onClick={() => navigate("/")} style={{ padding: "6px 10px", marginTop: 12 }}>
        Voltar para Home
      </button>
    </div>
  );
}