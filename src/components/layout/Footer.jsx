import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-accent py-6 text-center text-sm text-gray-500">
      © 2026 Terraria Crafting Tree
      <div className="flex gap-4 justify-end px-8">
        <Link to="/item" className="hover:underline font-semibold">
          Items
        </Link>
        <Link to="/recipes" className="hover:underline font-semibold">
          Recipes
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
