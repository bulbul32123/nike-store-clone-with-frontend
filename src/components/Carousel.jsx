import { useState, useEffect, useRef } from "react";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

const Carousel = ({ items }) => {
    const carouselRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = items.length - visibleItems + 1;
    const calculateVisibleItems = () => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const itemWidth = 300;

            const itemsPerRow = Math.floor(containerWidth / itemWidth);
            setVisibleItems(itemsPerRow);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(items.length / visibleItems));
    };

    useEffect(() => {
        calculateVisibleItems();
        window.addEventListener("resize", calculateVisibleItems);

        return () => {
            window.removeEventListener("resize", calculateVisibleItems);
        };
    }, [items]);

    return (
        <div className="relative w-full overflow-hidden" ref={carouselRef}>
            <div
                className="flex transition-transform duration-500 gap-4 ease-in-out"
                style={{
                    transform: `translateX(-${currentSlide * (100 / visibleItems)}%)`,
                }}
            >
                {items?.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                        <img src={item.img} alt={"Nike"} className="h-72  object-cover" />
                    </div>
                ))}
            </div>

            <button
                onClick={nextSlide}
                className={`absolute top-1/2 left-2 bg-gray-200 rounded-full p-3 ${currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
                    }`}
            >
                <LeftArrow />
            </button>
            <button
                onClick={nextSlide}
                className={`absolute top-1/2 right-2 bg-gray-200 rounded-full p-3 ${currentSlide === totalSlides - 1
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                    }`}
            >
                <RightArrow />
            </button>
        </div>
    );
};

export default Carousel;
