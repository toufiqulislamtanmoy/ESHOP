import { useContext } from 'react'
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useMyCartitem from '../Hooks/useMyCartitem';
import Swal from 'sweetalert2';
import { AuthContext } from '../Pages/Provider/AuthProviders';

const useAddToCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const { cartRefetch } = useMyCartitem();
    const { user } = useContext(AuthContext);
    const handelAddToCart = (data) => {
        console.log("data------->", data)
        const { _id, product_name, product_price, product_description, product_rating, product_brand, product_image } = data;
        const cartItemData = {
            productId: _id,
            product_name,
            product_price,
            product_description,
            product_rating,
            product_brand,
            product_image,
            userName: user.displayName,
            userEmail: user.email,
            picture: user.photoURL,
            paymentStatus: "pending"

        }

        axiosSecure.post('/addtocart', cartItemData).then(data => {
            cartRefetch();
            if (data.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Item added Into Your Cart Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return [handelAddToCart];

}

export default useAddToCart
