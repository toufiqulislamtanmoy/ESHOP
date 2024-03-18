import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Pages/Provider/AuthProviders";
import useUserRole from "../../../Hooks/useUserRole";
import useMyCartitem from "../../../Hooks/useMyCartitem";

const Navbar = () => {
    const location = useLocation();
    const { cartItem } = useMyCartitem();
    const { user, logout } = useContext(AuthContext);
    const [role, refetch] = useUserRole();


    const totalPrice = cartItem.reduce((sum, obj) => sum + parseInt(obj.price), 0);
    const handelLogOut = async () => {
        logout(); // Wait for the logout operation to complete
        await refetch();
    }


    return (
        <div className="navbar bg-[#E7E9EC] rounded-md shadow-xl px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/' ? 'text-info' : ''}`} to="/">Home</Link></li>

                        <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/shop' ? 'text-info' : ''}`} to="/books">Shop</Link></li>

                        <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/magazines' ? 'text-info' : ''}`} to="/about">About</Link></li>

                        <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 z-20 ${location.pathname === '/newspaper' ? 'text-info' : ''}`} to="/contact-us">Contact Us</Link></li>

                        {(role.role === 'admin' && user) && <li><Link to="/dashboard/requestforbook" className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/mystery' ? 'text-info' : ''}`}>Admin Panel</Link></li>}
                    </ul>
                </div>
                <Link to="/" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                    ESHOP
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/' ? 'text-info' : ''}`} to="/">Home</Link></li>

                    <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/shop' ? 'text-info' : ''}`} to="/shop">Shop</Link></li>

                    <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/about' ? 'text-info' : ''}`} to="/about">About</Link></li>

                    <li><Link className={`hover:text-info hover:transition-colors hover:duration-500 z-20 ${location.pathname === '/contact-us' ? 'text-info' : ''}`} to="/contact-us">Contact Us</Link></li>

                    {(role.role === 'admin' && user) && <li><Link to="/dashboard/requestforbook" className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/mystery' ? 'text-info' : ''}`}>Admin Panel</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex space-x-3">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{cartItem?.length}</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">{cartItem?.length} Items</span>
                                        <span className="text-info">Subtotal: {totalPrice} <span className="font-Russo">TK.</span></span>
                                        <div className="card-actions">
                                            <Link
                                                to="/userdashboard/userCart"
                                                className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 delay-100 btn-block text-center'

                                            >
                                                View Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        :
                        <Link to="/signin" className={`hover:text-info hover:transition-colors hover:duration-500 ${location.pathname === '/signin' ? 'text-info' : ''}`}>Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;