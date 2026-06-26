function ItemHeader({ item }) {
  return (
    <section className="item-header  text-center ">
      <h3>{item.name}</h3>
      <img
        src={`/images/items/${item.name}.png`}
        alt={item.name}
        className="item-icon"
      />

      <div>{item.tooltip && <p>{item.tooltip}</p>}</div>
    </section>
  );
}

export default ItemHeader;
