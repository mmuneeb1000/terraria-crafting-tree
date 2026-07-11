function ItemHeader({ id, item }) {
  return (
    <section className="item-header mt-4">
      <div className="flex justify-center items-center gap-4 py-4">
        <h2 className="font-bold text-lg">{item.name} </h2>
        <img src={`/images/${id}.png`} alt={item.name} className="h-6" />
      </div>
      <div className="text-center">{item.tooltip && <p>{item.tooltip}</p>}</div>
    </section>
  );
}

export default ItemHeader;
