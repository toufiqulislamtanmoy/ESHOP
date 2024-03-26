import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProviders";
import { IoIosMenu, IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { SlOrganization } from "react-icons/sl";
const Dashboard = () => {

    const { user, logout } = useContext(AuthContext);
    const handelLogOut = async () => {
        logout();

    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Top Navbar ✅*/}

                <div className="z-30 sticky top-0 left-0 flex items-center justify-between bg-[#F8F4F3] px-10 py-3">
                    <div>
                        <label htmlFor="my-drawer-2" className=" lg:hidden"><IoIosMenu /></label>
                    </div>

                    <div className="flex items-center">
                        <button
                            type="button"
                            className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                className="hover:bg-gray-100 rounded-full"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray", transform: "", msfilter: "" }}
                            >
                                <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" />
                            </svg>
                        </button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="z-20 menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100">
                                <li>
                                    <Link to="/userdashboard/userCart" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>

                                <li><button onClick={handelLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Top navbar end ❌ */}

                <Outlet />

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>


                <div className="menu p-4 w-80 min-h-full  bg-[#F8F4F3] text-base-content">
                    <div className="pb-4 border-b border-b-gray-800 flex items-center justify-around">
                        <Link to="/" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            ESHOP
                        </Link>

                    </div>
                    <ul className="mt-4">
                        <span className="text-gray-400 font-bold">Dashboard</span>
                        <li className="mb-1 group">
                            <Link
                                to="/dashboard/add-product"
                                className="flex gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                            >
                                <HiOutlineViewGridAdd />
                                <span className="text-sm">Add Product</span>
                            </Link>
                        </li>
                        <li className="mb-1 group">
                            <Link
                                to={`/dashboard/manage-product`}
                                className="flex gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                            >
                                <SlOrganization />
                                <span className="text-sm">Manage Products</span>
                            </Link>
                        </li>

                        <span className="text-gray-400 font-bold ">PERSONAL</span>
                        <li className="mb-1 group">
                            <Link
                                href=""
                                className="flex gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                            >
                                <IoMdNotificationsOutline />
                                <span className="text-sm">Notifications</span>
                                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
                                    0
                                </span>
                            </Link>
                        </li>
                        <li className="mb-1 group">
                            <Link
                                href=""
                                className="flex gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                            >
                                <LuMessageCircle />
                                <span className="text-sm">Messages</span>
                                {/* <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
                                    2 New
                                </span> */}
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;