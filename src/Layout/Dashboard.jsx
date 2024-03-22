import { useContext } from "react";
import { FcMenu } from "react-icons/fc";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faHouseChimney, faListCheck } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <label htmlFor="my-drawer-2" className="lg:hidden"><FcMenu className="text-3xl mb-12" /></label>

                    <Outlet />
                </div>
                <div className="drawer-side h-full">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-72 h-full fixed bg-[#c6dcf9] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
                        {/* Sidebar content here */}
                        <div className=" bg-white p-5 rounded-lg">
                            <div className="avatar flex flex-col gap-5 items-center justify-center">
                                <div className="w-16 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                                <h3 className="flex justify-center">{user.displayName}</h3>
                                <h3 className="flex justify-center">{user.email}</h3>
                            </div>
                        </div>
                        <div className="border border-gray-600 my-5"></div>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/"><FontAwesomeIcon icon={faHouseChimney} /> Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/add-product' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/add-product"><FontAwesomeIcon icon={faListCheck} /> Add Product
                            </Link>
                        </li>

                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/manage-product' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/manage-product"><FontAwesomeIcon icon={faFilePen} /> Manage Product
                            </Link>
                        </li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;