function ItemHeader({ item }) {
  return (
    <section className="item-header">
      <img
        src={`/images/items/${item.name}.png`}
        alt={item.name}
        className="item-icon"
      />

      <div>
        <h1>{item.name}</h1>

        {item.tooltip && <p>{item.tooltip}</p>}
      </div>
    </section>
  );
}

export default ItemHeader;
