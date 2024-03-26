import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleItemDetails = (id) => {
    const [axiosSecure] = useAxiosSecure();
    const { data: singleItem = [], isLoading: loading, refetch } = useQuery(

        ['singleItem', id],
        async () => {

            const response = await axiosSecure(`/product-details/${id}`)
            return response.data;
        }
    );

    return { singleItem, loading, refetch }; // Return as an object
};

export default useSingleItemDetails;
