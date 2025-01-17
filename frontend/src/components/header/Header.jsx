import { Link } from "react-router-dom";
import jordanLogo from '/jodan-logo.svg'

export default function Header() {
  return (
    <div className="py-1 bg-[#F5F5F5] flex justify-between padding-sm overflow-x-hidden h-full w-full max-md:hidden">
      <Link to='/' className="">
        <img src={jordanLogo} alt="Jordan Logo" className="h-5 ml-1" />
      </Link>
      <div className="FlexCenter gap-2 text-[#111111]">
        <li className=" list-none">
          <Link className="text-[11.7px] font-medium" to='/'>Find a Store</Link>
        </li>
        <li className="list-none flex pt-1 justify-center items-center">
          <div className="border-l-[1px] mr-2 h-3 border-[#111111] "></div>
          <Link className="text-xs font-medium" to='/'>Help</Link>
        </li>
        <li className="list-none flex pt-1 justify-center items-center">
          <div className="border-l-[1px] mr-2 h-3 border-[#111111] "></div>
          <Link className="text-xs font-medium" to='/'>Join us</Link>
        </li>


        <li className="list-none flex pt-1 justify-center items-center">
          <div className="border-l-[1px] mr-2 h-3 border-[#111111] "></div>
          <Link className="text-xs font-medium" to='/'>Sign In</Link>
        </li>
      </div>
    </div>
  )
}
