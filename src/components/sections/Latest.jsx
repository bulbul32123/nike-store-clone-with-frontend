import { Link } from "react-router-dom"

export default function Latest() {
    const latestData = [
        {
            img: "/latest1.jpg",
            name: "The Nike Swift Collection",
            link: "/",
        },
        {
            img: "/latest2.jpg",
            name: "The Nike Stride Collection",
            link: "/",
        },
    ]
    return (
        <section className="py-10">
            <h4 className="font-medium text-xl mb-5">The Latest</h4>
            <div className="flex gap-4 max-md:flex-col h-full w-full">
                {
                    latestData.map((item, index) => (
                        <div className="relative" key={index}>
                            <img src={item.img} alt={item.name} className="relative h-full w-full rounded-md" />
                            <div className="absolute bottom-10 left-10 w-full">
                                <h5 className="text-white">Run Ready</h5>
                                <h4 className="text-white text-lg font-medium">{item.name}</h4>
                                <button className="py-1.5 px-4 text-black rounded-full bg-white mt-4">
                                    Shop
                                </button>
                            </div>
                        </div>
                    ))

                }
            </div>
        </section>
    )
}
