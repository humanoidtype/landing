import {
 useDelay
} from "../hooks/useDelay"
import Spinner from "../components/Spinner"
import {
 icons
} from "../components/Icons"
import Card from "../components/Card"

const cardItems = [{
 image: "/public/default.svg",
 link: "#",
 title: "Card 1",
 desc: "Card 1 placeholder description"
}, {
 image: "/public/default.svg",
 link: "#",
 title: "Card 2",
 desc: "Card 2 placeholder description"
},
];

const Home = () => {
 const loading = useDelay(1000)
 if (loading) return <Spinner />
 
 const HeartIcon = icons.heart

 return (
  <div className="flex flex-col">
   <div className="flex justify-center mb-4">
    <HeartIcon className="w-5 h-5 text-brand" />
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {cardItems.map((item, i) => (
     <Card key={i} {...item} />
    ))}
   </div>
  </div>
 )
}

export default Home