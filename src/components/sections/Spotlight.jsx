// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import SpotlightProductCard from "../SpotlightProductCard";
import { spotLightProductsData } from "../../utils/spotlightProductsData";
import Carousel from "../Carousel";


export default function Spotlight() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.6,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="my-20 relative">
      <div className="flex justify-between mb-9 relative">
        <h4 className="font-medium text-2xl">Classics Spotlight</h4>
      </div>
      <Carousel items={spotLightProductsData} />
    </div>
  )
}
