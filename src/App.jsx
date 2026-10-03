import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AccountLayout from "./components/AccountLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SimplePage from "./pages/SimplePage";

import {useState} from 'react';
import {destinations,deals,reviews,img} from './data';
import {Header,Footer} from './components/Layout';
import {wrap,card,button,input,Hero,Rating,DestinationCard} from './components/UI';
import "./home.css";
function Search(){const [q,setQ]=useState('');const navigate=useNavigate();return <form onSubmit={e=>{e.preventDefault();navigate('/destinations?q='+encodeURIComponent(q))}} className="grid gap-1 rounded-3xl bg-white p-3 text-[#3a1750] shadow-2xl md:grid-cols-[1.4fr_1fr_.7fr_auto] md:items-center md:rounded-full md:p-2"><label className="block px-4 py-1 text-left"><span className="block text-xs font-bold text-p2">Where to?</span><input list="cities" value={q} onChange={e=>setQ(e.target.value)} placeholder="Paris, Rome, Prague…" className="w-full bg-transparent py-1 outline-none"/><datalist id="cities">{destinations.map(d=><option key={d.id} value={d.name}/>)}</datalist></label><label className="block px-4 py-1 text-left md:border-l md:border-[#f0d6e4]"><span className="block text-xs font-bold text-p2">When</span><input type="date" className="w-full bg-transparent py-1 outline-none"/></label><label className="block px-4 py-1 text-left md:border-l md:border-[#f0d6e4]"><span className="block text-xs font-bold text-p2">Travelers</span><input type="number" min="1" max="9" defaultValue="2" className="w-full bg-transparent py-1 outline-none"/></label><button className={button+' mx-2'}>Search</button></form>}
function Home(){
  const featured = destinations.slice(0,6);
  const dealItems = deals.slice(0,3);
  const testimonials = reviews.slice(0,3);

  return <main className="wayfare-home">
    <section className="bg-[linear-gradient(105deg,#c07591_0%,#dd8fa8_38%,#ffadc1_70%,#ffb9c9_100%)]">
      <div className={`${wrap} grid items-center gap-10 py-16 md:grid-cols-2 md:py-20`}>
        <div className="text-[#3a1750]">
          <p className="font-bold">EUROPE, MADE EASY</p>
          <h1 className="mt-2 text-[clamp(44px,6.8vw,92px)] font-extrabold leading-[.98]">
            Trips worth taking.
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed">
            Flights, stays and city passes in one easy booking. Pick a city and we handle the rest.
          </p>
        </div>
        <div className="relative mx-auto h-[400px] w-full max-w-[500px]">
          <img
            src={img('photo-1570077188670-e3a8d69ac5ff', 600)}
            className="absolute left-0 top-10 h-[290px] w-[44%] rounded-t-full rounded-b-3xl object-cover shadow-2xl"
          />
          <img
            src={img('photo-1502602898657-3e91760cbb34', 600)}
            className="absolute right-0 top-0 h-[350px] w-[50%] rounded-t-full rounded-b-3xl object-cover shadow-2xl"
          />
          <img
            src={img('photo-1552832230-c0197dd311b5', 400)}
            className="absolute bottom-0 left-[28%] h-[130px] w-[130px] rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>
      </div>
      <div className={`${wrap} relative mt-2 pb-14`}>
        <Search />
      </div>
    </section>

    <section className={`${wrap} py-14`}>
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="font-bold text-p2">FIND YOUR STYLE</p><h2 className="mt-1 text-3xl font-extrabold md:text-4xl">Pick your kind of trip</h2></div><Link to="/destinations" className="hidden font-bold text-p2 sm:block">View all →</Link></div>
      <div className="grid gap-4 md:grid-cols-3">
        {[['City','Big-name cities and classic sights.','photo-1502602898657-3e91760cbb34'],['Beach','Sun, sea and slow mornings.','photo-1530789253388-582c481c54b0'],['Culture','Museums, food and local life.','photo-1523906834658-6e24ef2386f9']].map(([x,y,photo])=>
          <Link key={x} to={'/destinations?type='+x} className={card+' group overflow-hidden transition hover:-translate-y-1 hover:border-p2'}>
            <div className="relative wf-card-img overflow-hidden"><img src={img(photo,700)} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/><h3 className="absolute bottom-4 left-5 text-2xl font-extrabold text-white">{x}</h3></div>
            <div className="p-5"><p className="opacity-70">{y}</p><span className="mt-3 inline-block font-semibold text-p2">Browse {x.toLowerCase()} trips →</span></div>
          </Link>)}
      </div>
    </section>

    <section className="bg-[#fff7fa] py-14"><div className={wrap}>
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="font-bold text-p2">EXPLORE EUROPE</p><h2 className="mt-1 text-3xl font-extrabold md:text-4xl">Popular destinations</h2><p className="mt-2 opacity-70">Hand-picked cities ready for your next trip.</p></div><Link to="/destinations" className="font-bold text-p2">See all →</Link></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featured.map(d=><DestinationCard key={d.id} d={d} saved={[]} toggle={()=>{}}/>)}</div>
    </div></section>

    <section className={`${wrap} py-16`}><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div><p className="font-bold text-p2">WHY WAYFARE?</p><h2 className="mt-2 text-4xl font-extrabold leading-tight">Everything you need for a smoother trip.</h2><p className="mt-5 text-lg leading-relaxed opacity-70">We make the complicated parts of travel feel simple, so you can spend more time enjoying where you are going.</p><Link to="/about" className={button+' mt-7'}>Learn about us</Link></div>
      <div className="grid gap-4 sm:grid-cols-2">{[['01','One simple plan','Flights, stays and city passes organized together.'],['02','Honest pricing','Clear prices with no surprise fees at checkout.'],['03','Local picks','Experiences and places chosen with travelers in mind.'],['04','Real support','Help when your plans change during your trip.']].map(([n,t,d])=><article key={n} className={card+' p-6 transition hover:-translate-y-1 hover:shadow-lg'}><span className="text-sm font-extrabold text-p2">{n}</span><h3 className="mt-4 text-xl font-extrabold">{t}</h3><p className="mt-2 opacity-70">{d}</p></article>)}</div>
    </div></section>

    <section className="bg-[#3a1750] py-16 text-white"><div className={wrap}>
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="font-bold text-p1">SAVE ON YOUR NEXT TRIP</p><h2 className="mt-1 text-3xl font-extrabold md:text-4xl">Special deals</h2></div><Link to="/deals" className="font-bold text-p1">All deals →</Link></div>
      <div className="grid gap-5 md:grid-cols-3">{dealItems.map(d=><article key={d.name} className="flex flex-col rounded-3xl bg-white p-6 text-[#3a1750] shadow-xl transition hover:-translate-y-1">{d.pop&&<span className="mb-4 self-start rounded-full bg-p1/20 px-3 py-1 text-sm font-bold text-p2">Popular</span>}<h3 className="text-2xl font-extrabold">{d.name}</h3><p className="mt-1 opacity-70">{d.cities} · {d.nights} nights</p><p className="mt-5 text-4xl font-extrabold text-p2">${d.price}</p><ul className="my-6 grid flex-1 gap-2 text-sm">{d.inc.slice(0,4).map(x=><li key={x}>✓ {x}</li>)}</ul><Link to={'/contact?plan='+encodeURIComponent(d.name)} className={button+' text-center'}>Choose this plan</Link></article>)}</div>
    </div></section>

    <section className={`${wrap} py-16`}><div className="text-center"><p className="font-bold text-p2">HOW IT WORKS</p><h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Your trip in three simple steps</h2></div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{[['1','Choose a destination','Pick a city, beach or cultural escape that fits your style.'],['2','Build your trip','Compare plans, dates and options in one place.'],['3','Pack your bags','Book your plan and get ready to explore.']].map(([n,t,d])=><div key={n} className="rounded-3xl border bg-white p-7 text-center shadow-sm"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-p1 text-xl font-extrabold text-[#3a1750]">{n}</div><h3 className="mt-5 text-xl font-extrabold">{t}</h3><p className="mt-2 opacity-70">{d}</p></div>)}</div>
    </section>

    <section className="bg-[#fff7fa] py-16"><div className={wrap}><div className="text-center"><p className="font-bold text-p2">TRAVELER STORIES</p><h2 className="mt-2 text-3xl font-extrabold md:text-4xl">What travelers say</h2></div>
      <div className="mt-9 grid gap-5 md:grid-cols-3">{testimonials.map(([name,city,text])=><article key={name} className={card+' p-6'}><Rating value="5"/><p className="mt-4 text-lg leading-relaxed">“{text}”</p><div className="mt-5 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-p1 font-extrabold text-[#3a1750]">{name.charAt(0)}</div><div><p className="font-extrabold">{name}</p><p className="text-sm opacity-60">{city}</p></div></div></article>)}</div>
    </div></section>

    <section className={`${wrap} py-16`}><div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-p1 to-[#ffd0dc] p-7 md:p-12"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div className="text-[#3a1750]"><p className="font-bold">TRAVEL INSPIRATION</p><h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Get travel ideas in your inbox.</h2><p className="mt-3 max-w-xl opacity-75">New destinations, seasonal deals and trip inspiration. No spam, just useful travel ideas.</p></div><form onSubmit={e=>e.preventDefault()} className="flex flex-col gap-2 sm:flex-row"><input type="email" required placeholder="Your email address" className="min-w-0 rounded-full border-0 bg-white px-5 py-3 outline-none sm:w-64"/><button className={button}>Subscribe</button></form></div></div></section>

    <section className="bg-[#3a1750] py-16 text-center text-white"><div className={`${wrap} max-w-3xl`}><p className="font-bold text-p1">READY TO GO?</p><h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Your next story starts here.</h2><p className="mx-auto mt-4 max-w-2xl text-lg opacity-75">Choose a destination, find a deal and let Wayfare handle the details.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/destinations" className={button}>Explore destinations</Link><Link to="/contact" className="rounded-full border-2 border-white/50 px-6 py-3 font-bold hover:bg-white hover:text-[#3a1750]">Plan a trip</Link></div></div></section>
  </main>
}
function Destinations({params,saved,toggle}){const [type,setType]=useState(params.get('type')||'All');const [q,setQ]=useState(params.get('q')||'');const [sort,setSort]=useState('rec');let list=destinations.filter(d=>(type==='All'||d.type===type)&&(d.name+' '+d.country).toLowerCase().includes(q.toLowerCase()));if(sort==='low')list=[...list].sort((a,b)=>a.price-b.price);if(sort==='rate')list=[...list].sort((a,b)=>b.rating-a.rating);return <main><Hero title="Destinations" sub="Nine European cities, each with a ready-to-book trip."/><div className={`${wrap} py-10`}><div className="mb-8 flex flex-wrap items-center gap-3">{['All','City','Beach','Culture'].map(x=><button key={x} onClick={()=>setType(x)} className={'rounded-full border px-5 py-2 font-semibold '+(type===x?'border-p2 bg-p2 text-white':'border-[#e3cfe0] bg-white')}>{x}</button>)}<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search city or country" className={input+' max-w-xs md:ml-auto'}/><select value={sort} onChange={e=>setSort(e.target.value)} className={input+' max-w-[200px]'}><option value="rec">Recommended</option><option value="low">Lowest price</option><option value="rate">Highest rated</option></select></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(d=><DestinationCard key={d.id} d={d} saved={saved} toggle={toggle}/>)}</div></div></main>}
function Destination({id}){const d=destinations.find(x=>x.id===id);if(!d)return <NotFound/>;return <main><Hero title={d.name} sub={`${d.country} · ${d.days} days · from $${d.price}`} image={d.img}/><div className={`${wrap} grid gap-8 py-12 md:grid-cols-[1fr_340px]`}><div><p className="text-xl leading-relaxed">{d.blurb}</p><h2 className="mt-8 text-2xl font-bold">Trip highlights</h2><ul className="mt-4 grid gap-3">{d.hl.map(x=><li key={x}>✓ {x}</li>)}</ul></div><aside className={card+' p-6 h-fit'}><p className="text-sm opacity-70">Ready to go?</p><p className="mt-1 text-4xl font-extrabold text-p2">${d.price}</p><p className="opacity-70">per person</p><Link to={'/contact?plan='+encodeURIComponent(d.name)} className={button+' mt-6 w-full text-center'}>Choose this trip</Link></aside></div></main>}
function Deals(){
  return <main>
    <Hero title="Deals" sub="Simple packages for your next European adventure."/>
    <section className={`${wrap} py-12`}>
      <div className="mx-auto mb-9 max-w-3xl text-center">
        <p className="font-bold text-p2">MORE TRIP, LESS TAB-SWITCHING</p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Pick the pace that fits you</h2>
        <p className="mt-3 text-lg leading-relaxed opacity-75">
          From a quick city break to a two-week European journey, each plan brings key travel details together in one place.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {deals.map(d=><article key={d.name} className={card+' flex flex-col p-7'}>
          {d.pop&&<span className="mb-4 self-start rounded-full bg-p1/15 px-3 py-1 text-sm font-bold text-p2">Popular</span>}
          <h2 className="text-2xl font-bold">{d.name}</h2>
          <p className="mt-1 opacity-70">{d.cities} · {d.nights} nights</p>
          <p className="mt-5 text-4xl font-extrabold text-p2">${d.price}</p>
          <p className="text-sm opacity-60">Package price</p>
          <ul className="my-6 grid flex-1 gap-2">{d.inc.map(x=><li key={x}>✓ {x}</li>)}</ul>
          <Link to={'/contact?plan='+encodeURIComponent(d.name)} className={button+' text-center'}>Choose this plan</Link>
        </article>)}
      </div>
    </section>
    <section className="bg-[#fff7fa] py-14">
      <div className={wrap}>
        <div className="mb-8 text-center">
          <p className="font-bold text-p2">THE WAYFARE DIFFERENCE</p>
          <h2 className="mt-2 text-3xl font-extrabold">The essentials, together</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['One clear itinerary','See your stays, travel connections and included experiences together.'],
            ['Room to explore','Choose a short escape or connect several cities in one longer trip.'],
            ['Help when plans change','Our support team is here to help with questions along the way.'],
          ].map(([title,description],index)=><article key={title} className={card+' p-6 text-center'}>
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-p1 text-xl font-extrabold text-[#3a1750]">{String(index+1).padStart(2,'0')}</span>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 leading-relaxed opacity-75">{description}</p>
          </article>)}
        </div>
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-p1 to-p2 p-8 text-center text-white md:p-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">Need help choosing a plan?</h2>
          <p className="mx-auto mt-2 max-w-2xl leading-relaxed opacity-90">
            Tell us what kind of trip you have in mind and we’ll help you find the right place to start.
          </p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-bold text-p2 transition hover:bg-[#fff7fa]">Talk to us</Link>
        </div>
      </div>
    </section>
  </main>;
}

function About(){
  return <main>
    <Hero title="About Wayfare" sub="We make multi-city Europe trips simple." image="photo-1503220317375-aaad61436b1b"/>
    <section className={`${wrap} py-14`}>
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="font-bold text-p2">TRAVEL, MADE EASIER</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Less planning stress. More moments worth remembering.</h2>
          <p className="mt-5 text-lg leading-relaxed opacity-75">
            Wayfare started with a simple frustration: planning a trip meant juggling a dozen tabs. We bring flights, stays and city passes together, so you can spend less time piecing a trip together and more time looking forward to it.
          </p>
          <p className="mt-4 leading-relaxed opacity-75">
            Whether you have one city in mind or want to see several, our goal is to make the important details easier to understand and keep your trip moving smoothly.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-p1 to-p2 p-8 text-white shadow-lg md:p-10">
          <p className="text-sm font-bold tracking-wide">OUR PROMISE</p>
          <p className="mt-3 text-2xl font-extrabold leading-snug">A clearer way to plan your next European adventure.</p>
          <p className="mt-4 leading-relaxed opacity-90">Useful options, straightforward details and real support when you need a hand.</p>
        </div>
      </div>
    </section>
    <section className="bg-[#fff7fa] py-14">
      <div className={wrap}>
        <div className="mb-8 text-center">
          <p className="font-bold text-p2">WHAT MATTERS TO US</p>
          <h2 className="mt-2 text-3xl font-extrabold">A better way to travel starts here</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Honest prices','What you see is what you pay. We keep package details clear, so you can choose with confidence.'],
            ['Local picks','Discover tours and places chosen to help you experience more of each destination.'],
            ['Real support','Get in touch with our team if you have a question or your plans change.'],
          ].map(([title,description],index)=><article key={title} className={card+' p-6 text-center'}>
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-p1 text-xl font-extrabold text-[#3a1750]">{String(index+1).padStart(2,'0')}</span>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 leading-relaxed opacity-75">{description}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section className={`${wrap} py-14`}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-bold text-p2">START EXPLORING</p>
        <h2 className="mt-2 text-3xl font-extrabold">Your next story could start in Europe</h2>
        <p className="mt-3 text-lg leading-relaxed opacity-75">Browse the cities, find a pace that suits you and start shaping a trip that feels like yours.</p>
        <Link to="/destinations" className={button+' mt-6'}>Find your trip</Link>
      </div>
    </section>
  </main>;
}
function Contact({params}){const [sent,setSent]=useState(false);return <main><Hero title="Contact" sub="Tell us what you want to book and we’ll help with the details." image="photo-1527631746610-bca00a040d60"/><div className={`${wrap} grid gap-8 py-12 md:grid-cols-[1fr_340px]`}><form onSubmit={e=>{e.preventDefault();setSent(true)}} className={card+' p-6'}><h2 className="text-2xl font-bold">Plan your trip</h2>{params.get('plan')&&<p className="mt-2 opacity-70">Selected: {params.get('plan')}</p>}<div className="mt-6 grid gap-4"><input required type="text" autoComplete="name" placeholder="Name" className={input}/><input required type="email" autoComplete="email" placeholder="Email" className={input}/><input required type="tel" autoComplete="tel" placeholder="Phone number" className={input}/><textarea required placeholder="Tell us about your trip" rows="6" className={input}/><button className={button}>{sent?'Message sent':'Send message'}</button>{sent&&<p className="text-sm font-semibold text-p2">Thanks! This demo form is now complete.</p>}</div></form><div><h2 className="text-2xl font-bold">What travelers say</h2><div className="mt-5 grid gap-4">{reviews.map(([n,c,t])=><div key={n} className={card+' p-5'}><Rating value="5"/><p className="mt-2">“{t}”</p><p className="mt-3 text-sm font-bold">{n} · {c}</p></div>)}</div></div></div></main>}
function Saved({saved,toggle}){const list=destinations.filter(d=>saved.includes(d.id));return <main><Hero title="Saved trips" sub="Your bookmarked destinations."/><div className={`${wrap} py-10`}>{list.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(d=><DestinationCard key={d.id} d={d} saved={saved} toggle={toggle}/>)}</div>:<p className="py-10 text-center opacity-70">No saved trips yet.</p>}</div></main>}
function NotFound(){return <main className={`${wrap} py-24 text-center`}><h1 className="text-4xl font-extrabold">Page not found</h1><p className="mt-2 opacity-70">That page doesn’t exist, but plenty of cities do.</p><Link to="/destinations" className={button+' mt-6'}>See destinations</Link></main>}

function PublicLayout({ children }) {
  return <><Header />{children}<Footer /></>;
}

function DestinationsRoute() {
  const [params] = useSearchParams();
  return <Destinations params={params} saved={[]} toggle={() => {}} />;
}

function DestinationRoute() {
  const { id } = useParams();
  return <Destination id={id} />;
}

function ContactRoute() {
  const [params] = useSearchParams();
  return <Contact params={params} />;
}

function SavedRoute() {
  return <Saved saved={[]} toggle={() => {}} />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/destinations" element={<PublicLayout><DestinationsRoute /></PublicLayout>} />
          <Route path="/destination/:id" element={<PublicLayout><DestinationRoute /></PublicLayout>} />
          <Route path="/deals" element={<PublicLayout><Deals /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactRoute /></PublicLayout>} />
          <Route path="/saved" element={<PublicLayout><SavedRoute /></PublicLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<AccountLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="trips" element={<SimplePage type="trips" />} />
              <Route path="saved" element={<SimplePage type="saved" />} />
              <Route path="bookings" element={<SimplePage type="bookings" />} />
              <Route path="settings" element={<SimplePage type="settings" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}