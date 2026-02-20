export default function Products({ products }) {
  return (
    <div>
      <p>Total: {products.length}</p>

      <ul>
        {products.map((c, i) => (
          <li key={c.id ?? i}>
            #{c.id ?? "?"} {c.name ?? ""}
          </li>
        ))}
      </ul>
    </div>
  );
}