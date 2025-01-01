import { GrSearch } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SearchBox({ inputFocused, searchTerms, setInputFocused, input, setInput }) {
    return (
        <div className={`absolute -top-8 w-full bg-white z-[11] transition-transform duration-200 ease-out ${inputFocused ? "translate-x-0" : "translate-x-[200rem]"} py-10`}>
            <div className="flex justify-between items-center pt-3 pb-5 padding-sm">
                <div className="max-md:hidden">
                    <img src="/logo.webp" alt="Nike Logo" className="h-10" />
                </div>
                <div className="relative flex justify-center items-center w-[80%] md:w-[70%] mr-4">
                    <span className="absolute left-0 rounded-full bg-[#F5F5F5] px-2 py-2.5">
                        <GrSearch size={20} color="black" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-full w-full p-2 pl-10 bg-grayLight outline-none hover:bg-[#dfdfdf]"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {input?.length > 0 && (
                        <button className="absolute right-0 pr-4" onClick={() => setInput('')}>
                            <IoMdClose size={20} color="black" />
                        </button>
                    )}
                </div>
                <div>
                    <button className="text-black font-medium" onClick={() => setInputFocused(false)}>
                        Cancel
                    </button>
                </div>
            </div>

            {input?.length > 1 ? (
                <div className="pl-10 pr-10 md:pl-48 md:pr-48 xl:pl-[15.4rem] xl:pr-[17rem] pt-5">
                    <p>Search Results Products</p>
                </div>
            ) : (
                <div className="pl-10 pr-10 md:pl-48 md:pr-48 xl:pl-[15.4rem] xl:pr-[17rem] pt-5">
                    <p className="text-left text-gray-500">Popular Search Terms</p>
                    <div className="flex gap-3 flex-wrap pt-3">
                        {searchTerms?.map((term, index) => (
                            <Link
                                to={`/search?q=${term}`}
                                key={index}
                                className="py-1.5 px-3 font-medium text-lg bg-grayLight rounded-full"
                            >
                                {term}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
