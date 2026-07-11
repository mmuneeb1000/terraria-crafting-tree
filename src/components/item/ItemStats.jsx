function ItemInfo({ item }) {
  const stats = [
    { label: "Rarity", value: item.rare },
    { label: "Buy", value: item.buy },
    { label: "Sell", value: item.sell },
    { label: "Value", value: item.value },
    { label: "Stack", value: item.stack },
    { label: "Hardmode", value: item.hardmode ? "Yes" : null },
  ].filter(({ value }) => value != null && value !== "");

  return (
    <section className="max-w-200 mx-auto mt-8">
      <div className="  overflow-hidden rounded-2xl border border-accent bg-background">
        <div className="grid grid-cols-2 divide-x divide-y divide-accent md:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="flex min-h-24 flex-col justify-center p-5"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {label}
              </span>

              <span className="mt-2 text-xl font-bold text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItemInfo;
