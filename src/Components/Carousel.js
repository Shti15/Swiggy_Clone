// import React from 'react'
// import { IMG_URL } from '../config'
// const CarouselCard=({imageId
//     })=>{
//     return(
//         <div className='corousel-card'>
//             <img src={IMG_URL+imageId}></img>
            

//         </div>
//     )
// }
// const Carousel = ({caraouseldata}) => {
//   return (
//     <>
//     <h3>What's in your mind??</h3>
//     <div className='carousel'>
        
//         {
//             caraouseldata.map((item)=>(
//                 <CarouselCard key={item.id} {...item}/>
//             ))
//         }
//     </div>
//     </>
//   )
// }

// export default Carousel
import React from 'react'
import { IMG_URL } from '../config'

const CarouselCard = ({ imageId }) => {
  return (
    <div className="flex-shrink-0 p-2">
      <img src={IMG_URL + imageId} className="h-48 w-44 rounded-lg" alt="carousel" />
    </div>
  )
}

const Carousel = ({ caraouseldata }) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 ml-4">What's in your mind??</h3>
      <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hidden">
        {
          caraouseldata.map((item) => (
            <CarouselCard key={item.id} {...item} />
          ))
        }
      </div>
    </>
  )
}

export default Carousel
