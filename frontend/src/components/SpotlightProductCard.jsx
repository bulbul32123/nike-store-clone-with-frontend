import { Link } from "react-router-dom";

const SpotlightProductCard = ({ p, }) => {

    return (

        <Link
            href={`/product/`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <div className="flex flex-col justify-center items-center relative">
                <img
                    src={p.img}
                    className="h-72 ObjectCover"
                    alt={"Nike"}
                />
               
            </div>
        </Link>
    );
};

export default SpotlightProductCard;