function ItemHeader({ id, item }) {
  return (
    <section className="item-header">
      <div className="flex justify-start align-center">
        <h3>{item.name} </h3>
        <img
          src={`/public/images/${id}.png`}
          alt={item.name}
          className="item-icon w-6 h-6 my-2 mx-3"
        />
      </div>
      <div>{item.tooltip && <p>{item.tooltip}</p>}</div>
    </section>
  );
}

export default ItemHeader;
