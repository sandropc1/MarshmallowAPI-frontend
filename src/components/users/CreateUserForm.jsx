import { useState } from "react";

export default function CreateUserForm({ onSubmit, loading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, email, phone, password });

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  }

  return (
    <div style={{ marginTop: 12, padding: 12, border: "1px solid #ddd", borderRadius: 8, maxWidth: 520 }}>
      <h3>Criar usuário</h3>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required />

        <button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </button>

        <pre style={{ background: "#111", color: "#0f0", padding: 12 }}>
          {JSON.stringify({ name, email, phone, password }, null, 2)}
        </pre>
      </form>
    </div>
  );
}