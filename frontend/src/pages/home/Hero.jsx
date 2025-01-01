import HeroImgWebp from "/heroImg.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Hero() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="padding-sm">
            <Link to={`/shop`} className="h-full w-full">
                <div className="relative w-full h-full">
                    {isLoading && (
                        <div className="h-[50vh] md:h-[90vh] w-full bg-grayLight animate-pulse">
                        </div>
                    )}
                    <picture>
                        <source srcSet={HeroImgWebp} />
                        <img
                            src={HeroImgWebp}
                            className={`w-full h-full SelectImgNone transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                                }`}
                            alt="Hero Image"
                            onLoad={() => setIsLoading(false)}
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>

                <div className="pt-8 md:FlexCenter flex w-full flex-col">
                    <h3 className="text-6xl xl:text-7xl uppercase text-center">LeBron XXII ‘The Limelight’</h3>
                    <p className="text-center">
                        Bring the pressure no matter how large the stage in the latest
                        colourway from the King.
                    </p>
                    <button className="py-1.5 px-4 text-white rounded-full bg-black mt-4">
                        Shop
                    </button>
                </div>
            </Link>
        </div>
    )
}
