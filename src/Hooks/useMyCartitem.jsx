import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useMyCartitem = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: cartItem = [], isLoading: loading, refetch: cartRefetch } = useQuery(
        ['cartItem'],
        async () => {
            // const res = await fetch(`http://localhost:5000/mycartItem/${user.email}`);
            // return res.json();
            const response = await axiosSecure(`/mycartItem/${user.email}`)
            return response.data;
        }
    );

    return { cartItem, loading, cartRefetch };
};

export default useMyCartitem;