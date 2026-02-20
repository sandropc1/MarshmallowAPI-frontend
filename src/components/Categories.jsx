export default function Categories({ categories }) {
  return (
    <div>
      <p>Total: {categories.length}</p>

      <ul>
        {categories.map((c, i) => (
          <li key={c.id ?? i}>
            #{c.id ?? "?"} {c.name ?? ""}
          </li>
        ))}
      </ul>
    </div>
  );
}