import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import BrowBookRequestList from "../Pages/AdminPanel/BrowBookRequestList/BrowBookRequestList";
import AddBooks from "../Pages/AdminPanel/AddBooks/AddBooks";
import CollectBooks from "../Pages/AdminPanel/CollectBook/CollectBooks";

import BookDetails from "../Pages/BookDetails/BookDetails";
import UserDashboard from "../Layout/UserDashboard";
import MyCart from "../Pages/UserPanel/MyCart/MyCart";
import MyBorrowBooks from "../Pages/UserPanel/MyBorrowBook/MyBorrowBooks";
import Payment from "../Pages/UserPanel/Payments/Payment";
import PaymentHistory from "../Pages/UserPanel/PaymentHistory/PaymentHistory";
import MyFile from "../Pages/UserPanel/MyFile/MyFile";
import NotFound from "../Pages/NotFound/NotFound";
import AllBookList from "../Pages/AdminPanel/UpdateBooks/AllBookList";
import UpdateBooks from "../Pages/AdminPanel/UpdateBooks/UpdateBooks";
import Products from "../Pages/Products/Products";


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
                path: "/bookdetails/:id",
                element: <PrivetRoute> <BookDetails /></PrivetRoute>
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
                path: "requestforbook",
                element: <BrowBookRequestList />
            },
            {
                path: "addbook",
                element: <AddBooks />
            },
            {
                path: "collectbook",
                element: <CollectBooks />
            },
            {
                path: "allbooks",
                element: <AllBookList />
            },
            {
                path: "updateBook/:id",
                element: <UpdateBooks />
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
                path: "userBorrowBooks",
                element: <MyBorrowBooks />
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