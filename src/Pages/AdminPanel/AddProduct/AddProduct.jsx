import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
const imageHostingToken = import.meta.env.VITE_IMGBB_KEY;


const AddProduct = () => {
    const [axiosSecure] = useAxiosSecure();
    const imagHostingUrl = `https://api.imgbb.com/1/upload?&key=${imageHostingToken}`
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [mainBanner, setMainBanner] = useState(false);
    const [cat1, setCat1] = useState(false);
    const [cat2, setCat2] = useState(false);





    const onSubmit = async (data) => {

        const { product_image, ...newData } = data;

        try {
            const formData = new FormData();
            if (product_image && product_image[0]) {
                formData.append('image', product_image[0]);
            }

            const imageHostResponse = await fetch(imagHostingUrl, {
                method: "POST",
                body: formData
            });

            const { success, data: { display_url } } = await imageHostResponse.json();

            if (success) {
                const inputData = {
                    ...newData,
                    product_rating: 0,
                    banner: mainBanner,
                    cat1,
                    cat2,
                    product_image: display_url
                };

                const { data: { insertedId } } = await axiosSecure.post('/add-product', inputData);
                console.log(insertedId);
                if (insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Added Successfully',
                    })
                    reset();
                }


            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-red-100 h-screen flex items-center justify-center">
            {/* component */}
            <section className="max-w-7xl p-6 mx-auto  rounded-md shadow-md bg-gray-800 ">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                    Add a new product
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="product_name">
                                Product Name
                            </label>
                            <input
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
                                id="product_description"
                                {...register("product_description", { required: true })}
                                type="textarea"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                defaultValue={""}
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



                        <div>
                            <label className="block text-sm font-medium text-white">Product Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-white"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="product_image"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span className="">Upload a file</span>
                                            <input

                                                id="product_image"
                                                name="product_image"
                                                {...register("product_image", { required: true })}
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                                    {errors.product_image && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>

        </div>

    )
};

export default AddProduct;