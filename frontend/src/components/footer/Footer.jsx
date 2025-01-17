import { Link } from "react-router-dom";
import { footerData } from "../../utils/footerData";


export default function Footer() {
  return (
    <div className="padding-sm">
      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 border-t pt-10 md:grid-cols-2 lg:grid-cols-3 lg:pt-12">
            {footerData.map((item, index) => (
              <div key={index} >
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">{item.title}</div>
                <nav className="flex flex-col gap-4">
                  {item.lists.map((list, indx) => (
                    <div key={indx}>
                      <Link to={'/'} className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{list}</Link>
                    </div>
                  ))
                  }
                </nav>
              </div>
            ))
            }
          </div>

          <div className="border-t py-8 text-center text-sm text-gray-400">© 2025 - Present Bulbul. All rights reserved.</div>
        </footer>
      </div>
    </div>
  )
}
