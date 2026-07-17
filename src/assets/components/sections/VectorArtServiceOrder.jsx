import { serviceCards } from "../common/ServiceCardsData";
import ServicePageCard from "../layout/ServicePageCard";

const VectorArtServiceOrder = () => {
  return (
   <section className="py-4">
         <div className="mx-auto max-w-[1320px]">
   
           <div
             className="
             grid
             grid-cols-1
             gap-7
   
             sm:grid-cols-2
             lg:grid-cols-3
           "
           >
             {serviceCards.vector.map((item) => (
               <ServicePageCard
                 key={item.id}
                 {...item}
               />
             ))}
           </div>
   
         </div>
       </section>
  )
}

export default VectorArtServiceOrder