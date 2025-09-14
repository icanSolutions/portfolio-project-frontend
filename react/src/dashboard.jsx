import './sidebar.css'
import { BiAlarm } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import OpeningPage from './opening_page';
import DashContent from './dash_content';
import { Outlet, Link } from "react-router-dom";


export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 flex flex-col gap-10 p-10 shadow-2xl bg-white">
        <div className="mb-2 flex justify-center items-center">
          <Link to='/home'>
          <img src={'../public/vite.svg'} alt="Logo" className="w-12 h-12" />
          </Link>
        </div>
        <h2 className='text-2xl font-bold text-blue-800 text-center mb-10'>Menu</h2>

        <nav className="flex flex-col gap-5">

          <Link to="dashboard" className="flex items-center gap-5 text-gray-700 hover:text-blue-600 transition">
            <BiAlarm size={24} /> Dashboard
          </Link>
          <Link to="products" className="flex items-center gap-5 text-gray-700 hover:text-blue-600 transition">
            <AiOutlineProduct size={24} /> Products
          </Link>
          <Link to="" className="flex items-center gap-5 text-gray-700 hover:text-blue-600 transition">
            <CiSettings size={24} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 ml-64 p-8 flex flex-col gap-8 '>
        {/* <OpeningPage /> */}
        <Outlet />
      </main>
    </div>
  );
}