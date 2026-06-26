import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="bg-background min-h-screen  mx-auto flex flex-col items-center justify-center">
        <Header />
        <main className="bg-surface flex-1 container mx-auto w-3/4 p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
