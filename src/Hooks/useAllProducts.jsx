import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllProducts = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: products = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            // const res = await fetch('https://myshop-omega-neon.vercel.app/allproducts');
            // return res.json();
            const response = await axiosSecure(`/products`)
            return response.data;
        }
    })

    return [products, loading, refetch];
};

export default useAllProducts;