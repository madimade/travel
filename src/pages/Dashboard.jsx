import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const cards = [
    ["Saved trips", "8", "♡"],
    ["Upcoming", "3", "✈"],
    ["Bookings", "5", "▤"],
    ["Countries", "12", "◎"],
  ];
  return <div>
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div><p className="text-sm font-semibold text-blue-600">Account dashboard</p><h1 className="mt-1 text-3xl font-extrabold text-slate-900">Hi, {user?.name?.split(" ")[0]} 👋</h1><p className="mt-2 text-slate-500">Here’s what’s happening with your trips.</p></div>
      <Link to="/" className="rounded-xl border bg-white px-4 py-3 text-center text-sm font-bold text-slate-700 hover:bg-slate-50">Explore destinations</Link>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(([label,value,icon]) => <div key={label} className="rounded-2xl border bg-white p-5 shadow-sm"><div className="flex justify-between"><span className="text-2xl">{icon}</span><span className="text-xs font-bold text-emerald-600">Active</span></div><p className="mt-5 text-sm text-slate-500">{label}</p><p className="text-3xl font-extrabold">{value}</p></div>)}
    </div>
    <div className="mt-6 grid gap-6 xl:grid-cols-3">
      <section className="rounded-2xl border bg-white p-6 xl:col-span-2"><div className="flex items-center justify-between"><h2 className="text-xl font-extrabold">Upcoming trips</h2><Link to="/account/trips" className="text-sm font-bold text-blue-600">View all</Link></div><div className="mt-5 space-y-3">{["Paris Weekend", "Rome & Florence", "Barcelona Escape"].map((x,i)=><div key={x} className="flex items-center justify-between rounded-xl bg-slate-50 p-4"><div><p className="font-bold">{x}</p><p className="text-sm text-slate-500">{["Oct 18–21","Nov 04–10","Dec 12–16"][i]}</p></div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Planned</span></div>)}</div></section>
      <section className="rounded-2xl border bg-white p-6"><h2 className="text-xl font-extrabold">Quick actions</h2><div className="mt-5 grid gap-3"><Link to="/account/profile" className="rounded-xl border p-4 font-semibold hover:bg-slate-50">Edit profile →</Link><Link to="/account/saved" className="rounded-xl border p-4 font-semibold hover:bg-slate-50">View saved trips →</Link><Link to="/account/bookings" className="rounded-xl border p-4 font-semibold hover:bg-slate-50">Manage bookings →</Link></div></section>
    </div>
  </div>;
}
