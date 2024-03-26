import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import UserDashboard from "../Layout/UserDashboard";
import MyCart from "../Pages/UserPanel/MyCart/MyCart";
import Payment from "../Pages/UserPanel/Payments/Payment";
import PaymentHistory from "../Pages/UserPanel/PaymentHistory/PaymentHistory";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/BookDetails/ProductDetails";
import AddProduct from "../Pages/AdminPanel/AddProduct/AddProduct";
import AllProductList from "../Pages/AdminPanel/UpdateProducts/AllProductList";
import UpdateProduct from "../Pages/AdminPanel/UpdateProducts/UpdateProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Products />
            },

            {
                path: "/product-details/:id",
                element: <PrivetRoute> <ProductDetails /></PrivetRoute>
            },
            {
                path: "/signin",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        // errorElement: <NotFound />,
        children: [
            {
                path: "add-product",
                element: <AddProduct />
            },
            {
                path: "update-product/:id",
                element: <UpdateProduct />
            },

            {
                path: "manage-product",
                element: <AllProductList />
            },


        ]

    },
    {
        path: "/userdashboard",
        element: <PrivetRoute><UserDashboard /></PrivetRoute>,
        // errorElement: <NotFound />,
        children: [
            {
                path: "userCart",
                element: <MyCart />
            },

            {
                path: "checkout/:id",
                element: <Payment />
            },
            {
                path: "purchaseHistory",
                element: <PaymentHistory />
            },


        ]

    }
]);

export default router;