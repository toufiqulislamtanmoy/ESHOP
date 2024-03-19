import { useParams } from "react-router-dom";
import useSingleItemDetails from "../../Hooks/useSingleItemDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useAddToCart from "../../Helper/useAddToCart";

const ProductDetails = () => {
    const { id } = useParams();
    const { singleItem } = useSingleItemDetails(id);
    const [handelAddToCart] = useAddToCart()

    return (
        <div>
            <div className="lg:flex justify-center items-center gap-9 my-10 mx-5 lg:mx-0 ">
                <div className="border-2 border-black p-5">
                    <figure className="cursor-pointer">
                        <img className="w-full h-[430px] transition-transform transform-gpu hover:-translate-x-2 bookOpen" src={singleItem?.product_image} alt="" />
                    </figure>
                </div>
                <div className="font-Poppins">
                    <h3 className="text-3xl font-bold">{singleItem?.product_name}</h3>

                    <h3 className="text-xl my-5">This is a product of {singleItem.category} brand  <span className="text-orange-400">{singleItem?.product_brand}</span></h3>


                    <h3 className="font-semibold font-Russo text-2xl">TK. {singleItem?.product_price}</h3>

                    <div className="my-10 lg:flex text-center gap-3">
                        <div className="my-2">
                            <button onClick={() => handelAddToCart(singleItem)} className="btn btn-wide rounded-none bg-transparent border-warning hover:bg-warning  hover:transition-colors hover:duration-1000 capitalize hover:text-white"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[40px]">

            </div>
        </div>
    );
};

export default ProductDetails;