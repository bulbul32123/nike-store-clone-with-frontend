import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsData } from "../../utils/productsData";
import ProductCard from "../ProductCard";
import { useState } from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

const Arrivals = () => {
    const itemsPerPage = 3; // Adjust based on your design
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = productsData.length - itemsPerPage + 1;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: itemsPerPage,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    const handleAfterChange = (previousSlide, state) => {
        setCurrentSlide(state.currentSlide);
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                disabled={currentSlide === 0}
                className={`absolute right-14 -top-2 bg-gray-200 rounded-full p-3 ${currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
                    }`}
            >
                <LeftArrow />
            </button>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                disabled={currentSlide === totalSlides - 1}
                className={`absolute right-0 -top-2 bg-gray-200 rounded-full p-3 ${currentSlide === totalSlides - 1
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                    }`}
            >
                <RightArrow />
            </button>
        );
    };

    return (
        <div className="my-20 relative">
            <div className="flex justify-between mb-9 relative">
                <h4 className="font-medium text-2xl">New Arrivals</h4>
                <div className="flex gap-4">
                    <CustomLeftArrow />
                    <CustomRightArrow />
                </div>
            </div>
            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                afterChange={handleAfterChange}
            >
                {productsData.map((product, index) => (
                    <ProductCard key={index} p={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default Arrivals;
