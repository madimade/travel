import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const links = [
  ["dashboard", "Dashboard", "▦"],
  ["profile", "Profile", "◉"],
  ["trips", "My Trips", "✈"],
  ["saved", "Saved Trips", "♡"],
  ["bookings", "Bookings", "▤"],
  ["settings", "Settings", "⚙"],
];

export default function AccountLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="w-full border-b bg-white lg:w-72 lg:border-b-0 lg:border-r">
          <div className="sticky top-0 p-5 lg:min-h-screen">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white">
                {user?.avatar || "U"}
              </div>
              <div className="min-w-0">
                <p className="truncate font-bold text-slate-900">{user?.name}</p>
                <p className="truncate text-sm text-slate-500">{user?.email}</p>
              </div>
            </div>

            <nav className="grid grid-cols-2 gap-2 lg:block">
              {links.map(([to, label, icon]) => (
                <NavLink
                  key={to}
                  to={`/account/${to}`}
                  className={({ isActive }) =>
                    `mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  <span>{icon}</span>{label}
                </NavLink>
              ))}
            </nav>

            <button onClick={handleLogout} className="mt-5 w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold text-slate-600 hover:bg-slate-50">
              ↪ Log out
            </button>
          </div>
        </aside>

        <main className="flex-1 p-5 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
