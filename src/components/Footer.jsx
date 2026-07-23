import {
 useState
} from "react";
import {
 Link
} from "react-router-dom";

const links = [{
 to: "/",
 label: "Home"
},
 {
  to: "/about",
  label: "About Me"
 },
];

const Footer = () => {
 return (
  <footer>
   <div className="p-6">
   <div className="max-w-5xl mx-auto flex flex-col gap-2">
    {links.map((link) => (
     <Link key={link.to} to={link.to} className="text-sm transition-colors text-stone-300 hover:text-brand">
      {link.label}
     </Link>
    ))}
   </div>
   </div>
   <div className="border-t border-stone-800 p-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
     <p className="text-xs text-stone-400">
      <strong>OrangeJuice</strong> projects
     </p>
    </div>
   </div>
  </footer>
 )
}

export default Footer