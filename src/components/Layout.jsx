import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const links = [
  ['Home', '/'],
  ['Destinations', '/destinations'],
  ['Deals', '/deals'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-p1 to-p2 text-white shadow-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3">
        <NavLink to="/" onClick={() => setOpen(false)} className="text-[28px] font-extrabold leading-none tracking-tight">
          wayfare ✈
        </NavLink>

        <button className="rounded-full bg-white/20 px-4 py-2 md:hidden" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-2 bg-p2 p-3 md:static md:flex md:flex-row md:bg-transparent md:p-0`}>
          {links.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[17px] font-semibold transition ${
                  isActive || (href !== '/' && location.pathname.startsWith(href))
                    ? 'bg-white text-p2'
                    : 'hover:bg-white/15'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to={user ? '/account/dashboard' : '/login'}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-[17px] font-semibold transition ${
                isActive || location.pathname.startsWith('/account') ? 'bg-white text-p2' : 'hover:bg-white/15'
              }`
            }
          >
            {user ? `👤 ${user.name?.split(' ')[0] || 'Account'}` : 'Login'}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return <footer className="mt-14 bg-gradient-to-br from-[#2a0f3d] to-[#43145f] text-white">
    <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-16">
      <div>
        <NavLink to="/" className="inline-block text-3xl font-extrabold tracking-tight transition hover:text-p1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-p1">
          wayfare <span aria-hidden="true">✈</span>
        </NavLink>
        <p className="mt-4 max-w-xs leading-relaxed text-white/70">
          Flights, stays and city passes for Europe, all in one simple booking.
        </p>
        <NavLink to="/destinations" className="mt-5 inline-flex items-center gap-2 font-bold text-p1 transition hover:text-white">
          Find your next trip <span aria-hidden="true">→</span>
        </NavLink>
      </div>

      <nav aria-label="Popular destinations">
        <h2 className="font-bold">Explore</h2>
        <ul className="mt-4 grid gap-3 text-sm text-white/70">
          {['Paris','Rome','Prague','Santorini'].map(x=><li key={x}>
            <NavLink className="transition hover:text-p1 focus-visible:text-p1" to={`/destination/${x.toLowerCase()}`}>{x}</NavLink>
          </li>)}
        </ul>
      </nav>

      <nav aria-label="Company">
        <h2 className="font-bold">Company</h2>
        <ul className="mt-4 grid gap-3 text-sm text-white/70">
          <li><NavLink className="transition hover:text-p1 focus-visible:text-p1" to="/about">About us</NavLink></li>
          <li><NavLink className="transition hover:text-p1 focus-visible:text-p1" to="/deals">Travel deals</NavLink></li>
          <li><NavLink className="transition hover:text-p1 focus-visible:text-p1" to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <div>
        <h2 className="font-bold">Get in touch</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Questions about your next trip? We’re here to help.
        </p>
        <a className="mt-3 inline-block font-semibold text-p1 transition hover:text-white" href="mailto:hello@wayfare.example">
          hello@wayfare.example
        </a>
        <p className="mt-2 text-sm text-white/60">Sun–Thu, 9am–6pm</p>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© Wayfare. Demo site; names, prices and offers are placeholders.</p>
        <p>Photos from Unsplash.</p>
      </div>
    </div>
  </footer>;
}
