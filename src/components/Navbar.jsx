import {
 useState
} from "react";
import {
 Link
} from "react-router-dom";

const Navbar = () => {
 const [open,
  setOpen] = useState(false);

 return (
  <nav className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950">
   <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
    <Link
     to="/"
     className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent"
     >
     OrangeJuice
    </Link>

    {/* Mobile toggle */}
    <button
     onClick={() => setOpen(!open)}
     className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-400 hover:bg-stone-800"
     aria-label="Toggle menu"
     >
     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {open ? (
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ): (
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
     </svg>
    </button>
   </div>

   {/* Mobile collapse */}
   <div
    className={`absolute right-0 top-full mt-0 z-50 w-full min-h-50 md:min-h-fit md:w-fit origin-top bg-stone-900 transition-all duration-300 ease-in-out ${
    open ? "scale-y-100 opacity-100": "pointer-events-none scale-y-0 opacity-0"
    }`}
    >
    <div className="flex flex-col gap-1 p-6">
     <div className="flex flex-col items-center rounded-lg p-6">
      <img
      className="mb-6 h-24 w-24 rounded-full border border-stone-800"
      src="/docs/images/people/profile-picture-3.jpg"
      alt="profile"
      />
     <h3 className="h5 mb-0.5 text-l font-semibold tracking-tight text-heading">
      lexxaxell212
     </h3>
     <code className="text-xs text-body-subtle">Humanoid entity</code>

     <div className="mt-4 flex gap-4">
      <button
       type="button"
       className="inline-flex items-center rounded-lg border border-transparent bg-brand px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-xs hover:bg-brand-strong focus:outline-none focus:ring-2 focus:ring-brand/40"
       >
       Get In Touch
      </button>
      <button
       type="button"
       className="inline-flex w-auto items-center self-start rounded-lg border border-stone-700 bg-stone-800 px-4 py-2.5 text-sm font-medium leading-5 text-body shadow-xs hover:bg-stone-700 hover:text-heading focus:outline-none focus:ring-2 focus:ring-stone-600"
       >
       Github
      </button>
     </div>
    </div>
   </div>
  </div>
 </nav>
)};

export default Navbar;