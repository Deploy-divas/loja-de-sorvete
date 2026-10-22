import { NavLink } from "react-router-dom";

export default function Navbar() {
  // NavLink identifica a página atual e destaca o link correspondente.
  const estiloLink = ({ isActive }) =>
    `rounded px-3 py-2 font-semibold transition-colors ${
      isActive ? "bg-pink-100 text-pink-800" : "text-stone-600 hover:bg-pink-50"
    }`;

  return (
    <header className="border-b border-pink-100 bg-white">
      <nav
        aria-label="Menu principal"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-5"
      >
        <NavLink to="/" className="text-2xl font-bold text-pink-700">
          Doce Gelado
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/" end className={estiloLink}>
            Home
          </NavLink>
          <NavLink to="/produtos" className={estiloLink}>
            Produtos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
