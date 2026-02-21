import { useState } from "react";
import Button from "../buttons/Button";

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
    <div class = "m-8 border max-w-xs">
        <div class="bg-slate-800 border-b p-2">
            <h3 class="text-white">Criar usuário</h3>
        </div>
        <div class="bg-gray-200 p-3">
          <form onSubmit={handleSubmit} class="grid p-2 gap-1">
            <input class="border p-1" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Apis" required />
            <input class="border p-1" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnapis@gmail.com" required />
            <input class="border p-1" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(11) 9 9999-9999" />
            <input class="border p-1" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required />

            <Button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </Button>
          </form>
          </div>
    </div>
  );
}