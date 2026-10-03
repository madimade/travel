const names = {trips:"My Trips",saved:"Saved Trips",bookings:"Bookings",settings:"Settings"};
export default function SimplePage({type}) {
 const title=names[type]||type;
 return <section><h1 className="text-3xl font-extrabold">{title}</h1><p className="mt-2 text-slate-500">This section is ready for your Wayfare account data.</p><div className="mt-7 rounded-2xl border bg-white p-8"><p className="text-slate-600">No items to display yet.</p></div></section>;
}
