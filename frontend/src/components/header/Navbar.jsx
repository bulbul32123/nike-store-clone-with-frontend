import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";
import { menuItems, searchTerms } from "../../utils/navbarsLinks";


export default function Navbar() {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);
  const [inputFocused, setInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null); // Track the hovered `li`
  const searchBoxRef = useRef(null);



  // Disable scrolling when SearchBox is open
  useEffect(() => {
    if (inputFocused) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll"); // Cleanup on unmount
  }, [inputFocused]);

  const controlNavbar = () => {
    if (window.scrollY > 80) {
      if (window.scrollY > lastScrolly) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrolly]);

  return (
    <>
      <div ref={searchBoxRef} className="h-full w-full relative ">
        {inputFocused && (
          <div
            onClick={() => setInputFocused(false)}
            className="absolute top-0 h-screen w-full bg-white/60 inset-0 z-10"
          ></div>
        )}
        <SearchBox
          searchTerms={searchTerms}
          inputFocused={inputFocused}
          setInputFocused={setInputFocused}
          input={input}
          setInput={setInput}
        />
      </div>

      <navbar
        className={`w-full h-full padding-sm py-2.5 bg-white FlexBetween z-[2] sticky top-0 transition-transform duration-300 ${show}`}
      >
        <div className="relative">
          <img src="/logo.webp" alt="Nike Logo" className="h-7" />
        </div>
        <div>
          <ul className="FlexCenter transition-all duration-300 ease-out gap-6 font-medium max-md:hidden md:ml-16">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className=""
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="pb-1 hover:border-b-2 border-black cursor-pointer">
                  {item?.name}
                </span>
                <div className="fixed top-12 padding-sm left-0 w-full bg-white shadow-lg rounded-md z-20" onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {hoveredItem === index && (
                    <ul className="flex justify-center flex-wrap gap-4 p-2">
                      {item.menus && item?.menus.map((menu, linkIndex) => (
                        <div className="py-10" key={linkIndex}>
                          <span className="text-base font-medium text-black">{menu.title}</span>
                          <li className="flex gap-2 mt-3 flex-col">
                            {menu.links.map((link, index) => (
                              <Link
                                key={index}
                                to={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                                className="block w-48 text-xs text-gray-500 hover:text-black"
                              >
                                {link}
                              </Link>
                            ))
                            }
                          </li>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-1 items-center justify-center">
          <div className="relative flex justify-center items-center inputHover pr-2">
            <span
              onClick={() => setInputFocused(true)}
              className="lg:absolute left-0 rounded-full hover:!bg-[#dfdfdf] p-2 searchIcon cursor-pointer"
            >
              <GrSearch size={20} color="black" />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setInputFocused(true)}
              className="max-lg:hidden rounded-full p-1.5 pl-10 bg-[#F5F5F5] outline-none hover:bg-[#dfdfdf] w-40"
            />
          </div>
          <span className="p-1.5 rounded-full hover:bg-[#e5e5e5]">
            <FiHeart size={24} />
          </span>
          <span className="p-1.5 rounded-full hover:bg-[#e5e5e5]">
            <IoBagOutline size={24} color="black" />
          </span>
        </div>
      </navbar>
    </>
  );
}
