import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>INSTOCK</h1>
          <NavLink to="/">Warehouse</NavLink>
          <NavLink to="Inventory">Inventory</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
