import { spotLightProductsData } from "../../utils/spotlightProductsData";
import Carousel from "../Carousel";


export default function Spotlight() {

  return (
    <div className="my-20 relative">
      <div className="flex justify-between mb-9 relative">
        <h4 className="font-medium text-2xl">Classics Spotlight</h4>
      </div>
      <Carousel items={spotLightProductsData} />
    </div>
  )
}
