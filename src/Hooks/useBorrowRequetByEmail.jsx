import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProviders";

const useBorrowRequetByEmail = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: borrowBookForUser = [], isLoading: loading, refetch: borrowBookUserRequstRefetch } = useQuery(

        ['borrowBookForUser'],
        async () => {
            // const res = await fetch(`http://localhost:5000/singlebook/${id}`);
            // return res.json();
            const response = await axiosSecure.get(`/borrowRequest/${user.email}`)
            return response.data;
        }
    );

    return { borrowBookForUser, loading, borrowBookUserRequstRefetch };
};

export default useBorrowRequetByEmail;