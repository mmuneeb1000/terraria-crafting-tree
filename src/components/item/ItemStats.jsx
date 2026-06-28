function ItemInfo({ item }) {
  const rows = [
    ["Rarity", item.rare],
    ["Buy Price", item.buy],
    ["Sell Price", item.sell],
    ["Stack", item.stack],
    ["Value", item.value],
    ["Hardmode", item.hardmode && "Yes"],
    ["Expert", item.expert && "Yes"],
    ["Master", item.master && "Yes"],
    ["Material", item.material && "Yes"],
    ["Consumable", item.consumable && "Yes"],
    ["Quest Item", item.quest && "Yes"],
  ].filter(([, value]) => value != null && value !== false && value !== "");

  return (
    <section className="mt-6">
      <div className="max-w-xl overflow-hidden rounded-2xl bg-background">
        <table className="w-full text-sm">
          <tbody>
            {rows.map(([label, value], index) => (
              <tr
                key={label}
                className={
                  index !== rows.length - 1 ? "border-b border-gray-700" : ""
                }
              >
                <th className="w-32 bg-background px-4 py-2 text-left font-semibold">
                  {label}
                </th>
                <td className="px-4 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ItemInfo;
