import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProviders";
import { BallTriangle } from "react-loader-spinner";
import Heading from "../../../Components/Shared/Heading";

const PaymentHistory = () => {
    const [purcheseItemInfo, setPurcheseItemInfo] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.get(`/paymentHistory/${user.email}`).then(res => {
            console.log(res.data);
            setPurcheseItemInfo(res.data)
        })
    }, [user?.email, axiosSecure])


    return (
        <div className={`flex items-center justify-center mt-28`}>
            <div>
                <Heading title="My Purchase Items" subtitle={"Explore Our Products"} />
                <div className="bg-gray-250 shadow-md max-w-7xl bg-white md:w-[700px] p-8 my-20 space-y-6">
                    {/* top part  */}
                    <div className="flex justify-between items-center">
                        <h4 className="text-xl font-medium text-slate-800 uppercase">Product</h4>
                        <p className="text-sm font-medium text-gray-400 uppercase">Price</p>
                    </div>
                    <hr />
                    {/*  Cart  map */}

                    {
                        purcheseItemInfo?.length > 0 ?
                            purcheseItemInfo.map((item) => (
                                <div key={item?._id} className="flex justify-between items-center border-b pb-6">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <img className="w-[75px] h-[75px] rounded-lg bg-slate-500" src={item?.product_image} alt="card navigate ui" />
                                        <div>
                                            <h5 className="text-lg font-medium">{item?.product_name}</h5>
                                            <p className="text-sm text-gray-400">Order at {item?.date}</p>
                                            <p className="text-sm text-gray-400">Transaction id {item?.transactionId}</p>
                                            <p className="text-sm text-gray-400">Delivery at {item?.date}</p>
                                        </div>
                                    </div>
                                    {/* item increase decrees  */}
                                    <div className="flex flex-wrap items-center gap-4 md:gap-10">

                                        <h6 className="text-xl font-medium text-slate-800">{item?.product_price}</h6>
                                    </div>
                                </div>
                            )) :
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
        </div>
    );
};

export default PaymentHistory;