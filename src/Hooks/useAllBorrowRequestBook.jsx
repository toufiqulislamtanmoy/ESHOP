import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllBorrowRequestBook = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: borrowBooks = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allborrowRequest'],
        queryFn: async () => {
            // const res = await fetch('https://myshop-omega-neon.vercel.app/allborrowRequest');
            // return res.json();

            const response = await axiosSecure(`/allborrowRequest`)
            return response.data;
        }
    })

    return { borrowBooks, loading, refetch };
};

export default useAllBorrowRequestBook;