import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
