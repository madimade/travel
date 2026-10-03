import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) return setError(result.message);
    navigate("/account/dashboard");
  }

  return <AuthCard title="Welcome back" subtitle="Log in to manage your Wayfare trips.">
    <form onSubmit={submit} className="space-y-4">
      {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</div>}
      <label className="block text-sm font-semibold text-[#3a1750]">Email<input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-2 w-full rounded-xl border border-[#e3cfe0] px-4 py-3 text-[#3a1750] outline-none focus:border-p2 focus-visible:ring-4 focus-visible:ring-p1/40" placeholder="you@example.com"/></label>
      <label className="block text-sm font-semibold text-[#3a1750]">Password<input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="mt-2 w-full rounded-xl border border-[#e3cfe0] px-4 py-3 text-[#3a1750] outline-none focus:border-p2 focus-visible:ring-4 focus-visible:ring-p1/40" placeholder="••••••••"/></label>
      <button className="w-full rounded-xl bg-p2 px-4 py-3 font-bold text-white transition hover:bg-[#8a2fe6]">Log in</button>
    </form>
    <p className="mt-5 text-center text-sm text-[#3a1750]/70">Don't have an account? <Link className="font-bold text-p2" to="/signup">Create one</Link></p>
  </AuthCard>;
}

function AuthCard({title, subtitle, children}) {
  return <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-p1 via-[#fff7fa] to-p2/20 p-5">
    <div className="w-full max-w-md rounded-3xl border border-[#f0d6e4] bg-white p-7 text-[#3a1750] shadow-2xl">
      <Link to="/" className="text-sm font-bold text-p2">← Wayfare</Link>
      <h1 className="mt-6 text-3xl font-extrabold">{title}</h1>
      <p className="mt-2 mb-7 text-[#3a1750]/70">{subtitle}</p>
      {children}
    </div>
  </div>;
}
