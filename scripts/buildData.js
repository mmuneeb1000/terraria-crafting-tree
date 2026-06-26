import fs from "fs";
import path from "path";

const INPUT = "./raw/main.json";
const OUTPUT = "./src/data";

fs.mkdirSync(OUTPUT, { recursive: true });

const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));

const items = {};
const recipes = {};
const search = [];

const stats = {
  items: 0,
  recipes: 0,
};

function cleanIngredient(ingredient) {
  // Alternative ingredient group (OR)
  if (
    Array.isArray(ingredient) &&
    ingredient.length > 0 &&
    Array.isArray(ingredient[0])
  ) {
    return ingredient.map(([item, amount]) => ({
      item,
      amount: Number(amount),
    }));
  }

  // Normal ingredient
  const [item, amount] = ingredient;

  return {
    item,
    amount: Number(amount),
  };
}
function toSlug(str) {
  if (!str) return "unknown";
  return str
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

for (const [id, item] of Object.entries(raw)) {
  stats.items++;
  const safeId = toSlug(id);
  items[safeId] = {
    id: safeId,
    name: item.name,
    rare: Number(item.rare ?? 0),
    buy: Number(item.buy ?? 0),
    sell: Number(item.sell ?? 0),
    tooltip: item.tip ?? "",

    hardmode: Boolean(item.hmode),
    expert: Boolean(item.expert),
    master: Boolean(item.master),
    material: Boolean(item.material),
    consumable: Boolean(item.consumable),
    quest: Boolean(item.quest),

    stack: Number(item.stack ?? 1),
    value: Number(item.value ?? 0),
  };

  if (item.recipes) {
    recipes[safeId] = item.recipes.map((recipe) => ({
      station: recipe.station ?? null,
      amount: Number(recipe.amount ?? 1),

      ingredients: (recipe.ings ?? []).map((ingredient) => {
        const cleaned = cleanIngredient(ingredient);

        return {
          ...cleaned,
          item: toSlug(cleaned.item),
        };
      }),
    }));

    stats.recipes++;
  }

  search.push({
    id: safeId,
    name: item.name,
  });
}

search.sort((a, b) => a.name.localeCompare(b.name));

fs.writeFileSync(
  path.join(OUTPUT, "items.json"),
  JSON.stringify(items, null, 2),
);

fs.writeFileSync(
  path.join(OUTPUT, "recipes.json"),
  JSON.stringify(recipes, null, 2),
);

fs.writeFileSync(
  path.join(OUTPUT, "search.json"),
  JSON.stringify(search, null, 2),
);

fs.writeFileSync(
  path.join(OUTPUT, "stats.json"),
  JSON.stringify(stats, null, 2),
);

console.log("Done!");
console.log(`Items: ${stats.items}`);
console.log(`Recipes: ${stats.recipes}`);
