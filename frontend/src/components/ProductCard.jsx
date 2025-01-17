import { Link } from "react-router-dom";

const ProductCard = ({ p }) => {

    return (

        <Link
            href={`/product/`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <img
                src={p?.thumbnail}
                className="h-[400px] w-full ObjectCover"
                alt={p.name}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <h4 className="text-[#707072]">{p.category}</h4>
                <div className="flex items-center text-black">
                    <p className="mr-2 font-semibold">
                        MRP: &#8377;{p.price}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;