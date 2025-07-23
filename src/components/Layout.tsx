import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
