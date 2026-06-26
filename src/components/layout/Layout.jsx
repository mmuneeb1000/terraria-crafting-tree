import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="min-h-screen  flex flex-col items-center justify-center">
        <Header />
        <main className="flex-1 container mx-auto p-4">
          <h1>This is Terraria Crafting Tree</h1>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
