import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function SaleBanner() {
  return (
    <div className=" bg-[#F5F5F5] relative w-full h-20 border-b-[1.5px] pl-0 pr-0">
      <Carousel autoPlay centerMode infiniteLoop onSwipeMove showArrows={false} showStatus={false} showIndicators={false} className="pt-2">
        <div className="text-black">
          <h5 className="text-base">Move, Shop, Customise & Celebrate With Us</h5>
          <p className="text-xs">No matter what you feel like doing today, It’s better as a Member.</p>
          <button className="text-sm underline">Join us</button>
        </div>
        <div>
          <h5 className="">New Styles On Sale: Up To 40% Off</h5>
          <button className="underline text-sm">Shop All Our New Markdowns</button>
        </div>
      </Carousel>
    </div>
  )
}
