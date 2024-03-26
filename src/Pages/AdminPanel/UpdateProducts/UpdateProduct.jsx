import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useSingleItemDetails from "../../../Hooks/useSingleItemDetails";
import Heading from "../../../Components/Shared/Heading";
import { useState } from "react";

const UpdateProduct = () => {
    const [mainBanner, setMainBanner] = useState(false);
    const [cat1, setCat1] = useState(false);
    const [cat2, setCat2] = useState(false);
    const { id } = useParams();
    const { singleItem, refetch } = useSingleItemDetails(id);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();



    const onSubmit = async (data) => {

        const { ...newData } = data;

        try {


            const inputData = {
                ...newData,
                product_rating: 0,
                banner: mainBanner,
                cat1,
                cat2,

            };
            const { data: { modifiedCount } } = await axiosSecure.patch(`/update-product/${id}`, inputData);
            console.log(modifiedCount)
            if (modifiedCount > 0) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Product update Successfully',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'There have no changes',
                })
            }



        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="text-center p-10">
                <Heading title="Update Product Details" subtitle={"Explore Our Products"} />
            </div>

            <div className="  flex items-center justify-center">
                {/* component */}
                <section className="max-w-7xl p-6 mx-auto  rounded-md shadow-md bg-gray-800 ">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-white dark:text-gray-200" htmlFor="product_name">
                                    Product Name
                                </label>
                                <input
                                    defaultValue={singleItem?.product_name}
                                    id="product_name"
                                    {...register("product_name", { required: true })}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                {errors.product_name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="product_price"
                                >
                                    Product Price
                                </label>
                                <input
                                    id="product_price"
                                    defaultValue={singleItem?.product_price}
                                    {...register("product_price", { required: true })}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                {errors.product_price && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="product_description"
                                >
                                    Product Description
                                </label>
                                <textarea
                                    defaultValue={singleItem?.product_description}
                                    id="product_description"
                                    {...register("product_description", { required: true })}
                                    type="textarea"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"

                                />
                                {errors.product_description && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="product_brand"
                                >
                                    Product Brand Name
                                </label>
                                <input
                                    id="product_brand"
                                    defaultValue={singleItem?.product_brand}
                                    {...register("product_brand", { required: true })}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                {errors.product_brand && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="main_banner"
                                >
                                    Add This In Main Banner?
                                </label>
                                <select

                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    onChange={(e) => setMainBanner(e.target.value)}
                                >
                                    <option selected value={false}>No</option>
                                    <option value={true}>Yes</option>

                                </select>
                            </div>
                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="main_banner"
                                >
                                    Add This In Category1?
                                </label>
                                <select
                                    onChange={(e) => setCat1(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    <option value={false} selected>No</option>
                                    <option value={true}>Yes</option>

                                </select>
                            </div>
                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="main_banner"
                                >
                                    Add This In Category2?
                                </label>
                                <select
                                    onChange={(e) => setCat2(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    <option value={false} selected>No</option>
                                    <option value={true}>Yes</option>

                                </select>
                            </div>




                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                                Update
                            </button>
                        </div>
                    </form>
                </section>

            </div>

        </>
    );
};

export default UpdateProduct;