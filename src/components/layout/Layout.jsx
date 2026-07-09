import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

function Layout() {
  return (
    <>
      <div className="bg-background flex flex-col items-center justify-center">
        <Header />
        <main className="bg-surface w-full">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default Layout;
