import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProviders";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex flex-col items-center bg-slate-200  rounded-md bg-clip-padding backdrop-filter  bg-opacity-70 text-[#fff] h-[100vh]">
            <SectionTitle title={"Make Payment"} />
            <div className="w-full lg:w-1/2 mx-auto my-24 border-2 rounded-md shadow-md shadow-gray-800 bg-base-100 border-black p-10 ">
                <form onSubmit={handleSubmit}>
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
                    <button className="btn bg-info rounded-md hover:bg-success hover:transition-colors hover:duration-1000 capitalize hover:text-white my-5" type="submit" disabled={!stripe || !clintSecret || processing}>
                        Pay Now <FontAwesomeIcon icon={faDollarSign} />
                    </button>
                </form>
                {errorMsg && <p className='text-red-500 w-2/3 mx-auto'>{errorMsg}</p>}

            </div>
        </div>
    );
};

export default CheckOutForm;