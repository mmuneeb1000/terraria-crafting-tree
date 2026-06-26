import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>This is Terraria Crafting Tree</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
