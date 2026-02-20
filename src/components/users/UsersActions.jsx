export default function UsersActions({
  usersCount,
  onLoad,
  onToggleForm,
  loading,
  creating,
  showForm
}) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <button
        onClick={onLoad}
        disabled={loading || creating}
        style={{ padding: "8px 12px" }}
      >
        {loading ? "Carregando..." : "Carregar usuários"}
      </button>

      <button
        onClick={onToggleForm}
        disabled={creating}
        style={{ padding: "8px 12px" }}
      >
        {showForm ? "Fechar cadastro" : "Adicionar usuário"}
      </button>

      <span>Total: {usersCount}</span>
    </div>
  );
}