import { useState } from "react";
import { useAuth } from "../components/AuthContext";
export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [name,setName]=useState(user?.name||"");
  const [email,setEmail]=useState(user?.email||"");
  const [saved,setSaved]=useState(false);
  function submit(e){e.preventDefault(); updateProfile({name,email,avatar:name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()}); setSaved(true); setTimeout(()=>setSaved(false),1800);}
  return <section className="max-w-2xl"><h1 className="text-3xl font-extrabold">Profile</h1><p className="mt-2 text-slate-500">Manage your personal account information.</p><form onSubmit={submit} className="mt-7 rounded-2xl border bg-white p-6 space-y-5"><label className="block font-semibold">Full name<input value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3"/></label><label className="block font-semibold">Email<input value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3"/></label><button className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white">Save changes</button>{saved&&<span className="ml-3 text-sm font-semibold text-emerald-600">Saved!</span>}</form></section>
}
