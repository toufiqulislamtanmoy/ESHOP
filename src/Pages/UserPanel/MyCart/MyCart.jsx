import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMyCartitem from "../../../Hooks/useMyCartitem";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";
import Heading from "../../../Components/Shared/Heading";

const MyCart = () => {
    const { cartItem, cartRefetch } = useMyCartitem();
    console.log(cartItem)

    const [axiosSecure] = useAxiosSecure();
    const handelDeleteCartItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteItem/${id}`).then(data => {
                    cartRefetch();
                    if (data.data.deletedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Item Deleted from your Cart Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })
    }
    return (
        <div className="text-center">
            <div className="bg-gray-250 shadow-md max-w-6xl bg-white  mx-auto p-8 my-20 space-y-6">
                {/* top part  */}
                <Heading title="My Cart Items" subtitle={"Explore Our Products"} />
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-medium text-slate-800 uppercase">order</h4>
                    <p className="text-sm font-medium text-gray-400 uppercase">edit cart</p>
                </div>
                <hr />
                {/*  Cart  map */}
                {
                    cartItem?.length > 0 ?
                        cartItem.map((item) => (
                            <div key={item?._id} className="flex justify-between items-center border-b pb-6">
                                <div className="flex flex-wrap items-center gap-4">
                                    <img className="w-[75px] h-[75px] rounded-lg bg-slate-500" src={item?.product_image} alt="card navigate ui" />
                                    <div>
                                        <h5 className="text-lg font-medium">{item?.product_name}</h5>
                                        <p className="text-sm text-gray-400">Delivery {item?.product_brand}</p>
                                    </div>
                                </div>
                                {/* item increase decrees  */}
                                <div className="flex flex-wrap items-center gap-4 md:gap-10">
                                    <h6 className="text-xl font-medium text-slate-800">{item?.product_price}</h6>
                                    <button onClick={() => handelDeleteCartItem(item?._id)}>Delete</button>
                                    <Link to={`/userdashboard/checkout/${item?._id}`} className="btn btn-xs rounded-md bg-secondary hover:bg-info  hover:transition-colors hover:duration-1000 capitalize text-white"><FontAwesomeIcon icon={faCreditCard} /></Link>
                                </div>
                            </div>
                        ))
                        :
                        <div>
                            <p className="text-center">No Item added into your cart</p>
                            <p className="flex items-center justify-center">
                                <BallTriangle
                                    height={100}
                                    width={100}
                                    radius={5}
                                    color="#4fa94d"
                                    ariaLabel="ball-triangle-loading"
                                    wrapperClass={{}}
                                    wrapperStyle=""
                                    visible={true}
                                />
                            </p>
                        </div>
                }

            </div>
        </div>
    );
};

export default MyCart;