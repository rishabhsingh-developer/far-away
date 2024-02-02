export default function Item({ Delete, update, item }) {
  return (
    <div className="Item">
      <input
        type="checkbox"
        onClick={() => {
          update(item.id);
        }}
      />

      <span>{item.number}</span>
      {console.log(item.packed)}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => Delete(item.id)}>❌</button>
    </div>
  );
}
