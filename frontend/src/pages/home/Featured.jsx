import { Link } from "react-router-dom"
import { useState } from "react";
import { featuredData } from "../../utils/featuredData";

export default function Featured() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="py-20 overflow-x-hidden">
            <h4 className="font-normal text-2xl mb-5 padding-sm ">Featured</h4>
            <div className="flex gap-4 items-center overflow-y-hidden md:padding-sm pl-3">
                {isLoading && (
                    <div className="h-full w-full bg-grayLight animate-pulse">
                    </div>
                )}
                {featuredData.map((item, key) => (
                    <Link key={key} to={'/'} className="shrink-0">
                        <picture>
                            <source srcSet={item.img} type="image/webp" />
                            <img
                                src={item.img}
                                className={`mb-5 SelectImgNone transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                                    }`}
                                alt="Hero Image"
                                onLoad={() => setIsLoading(false)}
                                loading="lazy"
                                decoding="async"
                            />
                            <span className="text-xl">{item.title}</span>
                        </picture>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}
