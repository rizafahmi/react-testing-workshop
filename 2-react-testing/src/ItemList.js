function ItemList({ items }) {
  return items.length ? (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : (
    <div>no items, yet</div>
  );
}

export default ItemList;
