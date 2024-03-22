import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import CollectBooks from "../Pages/AdminPanel/CollectBook/CollectBooks";


import UserDashboard from "../Layout/UserDashboard";
import MyCart from "../Pages/UserPanel/MyCart/MyCart";
import Payment from "../Pages/UserPanel/Payments/Payment";
import PaymentHistory from "../Pages/UserPanel/PaymentHistory/PaymentHistory";
import MyFile from "../Pages/UserPanel/MyFile/MyFile";
import NotFound from "../Pages/NotFound/NotFound";
import AllBookList from "../Pages/AdminPanel/UpdateBooks/AllBookList";
import UpdateBooks from "../Pages/AdminPanel/UpdateBooks/UpdateBooks";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/BookDetails/ProductDetails";
import AddProduct from "../Pages/AdminPanel/AddProduct/AddProduct";


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
        errorElement: <NotFound />,
        children: [
            {
                path: "add-product",
                element: <AddProduct />
            },
            {
                path: "update-product/:id",
                element: <UpdateBooks />
            },
            {
                path: "collectbook",
                element: <CollectBooks />
            },
            {
                path: "manage-product",
                element: <AllBookList />
            },


        ]

    },
    {
        path: "/userdashboard",
        element: <PrivetRoute><UserDashboard /></PrivetRoute>,
        errorElement: <NotFound />,
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
            {
                path: "myfile",
                element: <MyFile />
            },

        ]

    }
]);

export default router;