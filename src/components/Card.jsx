const Card = ({
 image, link, title = "Untitled", desc = "No descriptions."
}) => {
 return (
  <>
   <div className="flex flex-col bg-stone-900/50 p-6 border border-stone-800/50 rounded-lg shadow-xs">
    {image ? <img className="object-cover w-full rounded-lg border border-stone-800 h-48 mb-4 md:mb-0" src={image} alt={title} /> : <img className="object-cover w-full rounded-lg border border-stone-800 h-48 mb-4 md:mb-0" src="/public/default.svg" alt={title} />}
   <div className="flex flex-col md:p-4 leading-normal">
    <h3 className="h5 mb-2 text-2xl font-bold tracking-tight text-stone-100">{title}</h3>
    <p className="mb-6 text-body-subtle">
     {desc}
    </p>
    <div>
     <a href={link} target="_blank" rel="noopener noreferrer">
      <button
       type="button"
       className="inline-flex items-center w-auto bg-stone-500 box-border border border-stone-400 hover:bg-stone-200 hover:text-stone-900 focus:ring-2 focus:ring-stone-200 shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
       >
       Open
      </button>
     </a>
    </div>
   </div>
  </div>
 </>
)}

export default Card