import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProviders";
import { TbCurrencyTaka } from "react-icons/tb";
import Heading from "../../../Components/Shared/Heading";

const CheckOutForm = ({ checkOutDetail }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMsg, setErrorMsg] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [clintSecret, setClintSecret] = useState('');
    console.log(checkOutDetail)
    const { product_price, product_description, product_brand, product_name, productId, product_image, _id } = checkOutDetail;
    const navigate = useNavigate();



    useEffect(() => {
        console.log(product_price)
        if (product_price > 0) {
            axiosSecure.post('/create-payment-intent', { product_price }).then(res => {
                setClintSecret(res.data.clientSecret);
            })
        }
    }, [axiosSecure, product_price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log("inside did not get the stripe and element")
            return;
        }


        const card = elements.getElement(CardElement);
        console.log(card);
        if (card == null) {
            console.log('Card is null')
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMsg(error.message);
        } else {
            setErrorMsg('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);
        const { paymentIntent, error: confrimError } = await stripe.confirmCardPayment(
            clintSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "Unknown",
                        email: user?.email || "Unknown",
                    },
                },
            },
        );

        if (confrimError) {
            console.log(confrimError);
        }

        setProcessing(false);

        if (paymentIntent?.status === "succeeded") {
            const currentDate = new Date();

            const paymentInfo = {
                email: user?.email,
                transactionId: paymentIntent.id,
                product_price,
                date: currentDate.toLocaleDateString(),
                time: currentDate.toLocaleTimeString(),
                userPhoto: user?.photoURL,
                paymentStatus: 'Paid',
                cartId: _id,
                product_name,
                product_image,
                product_brand,
                productId,
                product_description

            }
            axiosSecure.post("/payments", paymentInfo).then(res => {
                console.log(res.data)
                if (res.data.insertResult.insertedId && res.data.deleteResult.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Transaction Successful',
                        showConfirmButton: true,
                    })
                    navigate('/userdashboard/purchaseHistory');
                }
            })
        } else {
            setErrorMsg('An error occur try after some times leater or refresh the page');

        }


    }
    return (
        <div className="mt-10">
            <Heading title="Make Payment" subtitle={"Fully secure payment integration"} />
            <div className="max-w-4xl h-[320px]  mx-auto bg-gradient-to-r from-red-100 to-yellow-50  rounded-xl p-8 shadow-lg transform  transition-transform duration-300 ">
                <div className="">
                    <div className="space-y-2">
                        <h1><span>Pay For: </span> {product_name}</h1>
                        <h1><span>Payable Amount: </span> {product_price} TK</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-10">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#000',
                                        '::placeholder': {
                                            color: '#000',
                                        },
                                    },
                                    invalid: {
                                        color: '#c6dcf9',
                                    },
                                },
                            }}
                        />
                        <button className="bg-gradient-to-tr from-slate-300 to-orange-300 mt-5 rounded-[7px] transition-all duration-500 hover:bg-gradient-to-tl hover:from-cyan-200 hover:to-green-300 px-5 py-2 text-blue-950 font-Poppins font-semibold"
                            type="submit" disabled={!stripe || !clintSecret || processing}>
                            <span className=" flex items-center ">
                                Pay now
                                <TbCurrencyTaka className="font-semibold" />
                            </span>
                        </button>
                    </form>
                    {errorMsg && <p className='text-red-500 w-2/3 mx-auto'>{errorMsg}</p>}
                </div>

            </div>
        </div>
    );
};

export default CheckOutForm;