function ItemInfo({ item }) {
  return (
    <section className="item-info w-32 mx-auto">
      <table>
        <tbody>
          <tr>
            <th>Rarity</th>
            <td>{item.rare}</td>
          </tr>

          <tr>
            <th>Buy Price</th>
            <td>{item.buy}</td>
          </tr>

          <tr>
            <th>Sell Price</th>
            <td>{item.sell}</td>
          </tr>

          <tr>
            <th>Stack</th>
            <td>{item.stack}</td>
          </tr>

          <tr>
            <th>Value</th>
            <td>{item.value}</td>
          </tr>

          <tr>
            <th>Hardmode</th>
            <td>{item.hardmode ? "Yes" : "No"}</td>
          </tr>

          <tr>
            <th>Expert</th>
            <td>{item.expert ? "Yes" : "No"}</td>
          </tr>

          <tr>
            <th>Master</th>
            <td>{item.master ? "Yes" : "No"}</td>
          </tr>

          <tr>
            <th>Material</th>
            <td>{item.material ? "Yes" : "No"}</td>
          </tr>

          <tr>
            <th>Consumable</th>
            <td>{item.consumable ? "Yes" : "No"}</td>
          </tr>

          <tr>
            <th>Quest Item</th>
            <td>{item.quest ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ItemInfo;
