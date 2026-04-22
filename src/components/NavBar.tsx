import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full px-5 py-2.5 flex items-center justify-center border border-gray-300">
      <h1 className="font-bold text-2xl text-[#3F62CD]">Booklicious</h1>
      <div className="w-full px-10 flex items-center justify-center gap-8">
        <form method="get" action="" id="search_bar">
          <input type="text" name="query" id="search_query" placeholder="Search book..."
            className="focus:outline-none border border-gray-300 py-3 px-6 rounded-s-full rounded-e-full w-96"/>
        </form >
        <Link to={"/cart/"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </Link>
      </div>
    </nav>
  )
};

export default NavBar;