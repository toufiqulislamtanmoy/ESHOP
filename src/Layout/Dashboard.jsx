import { useContext } from "react";
import { FcMenu } from "react-icons/fc";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProviders";

const Dashboard = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">

                    <label htmlFor="my-drawer-2" className="lg:hidden"><FcMenu className="text-5xl mb-12" /></label>

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-72 h-full bg-[#c6dcf9] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
                        {/* Sidebar content here */}
                        <div className=" bg-white p-5 rounded-lg">
                            <div className="avatar flex flex-col gap-5 items-center justify-center">
                                <div className="w-16 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                                <h3 className="flex justify-center">{user.displayName}</h3>
                            </div>
                        </div>
                        <div className="border border-gray-600 my-5"></div>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/requestforbook' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/requestforbook">Request For Books</Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/addbook' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/addbook">Add Books</Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/collectbook' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/collectbook">Collect Books</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;