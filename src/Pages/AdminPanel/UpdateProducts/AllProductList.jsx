import { BallTriangle } from "react-loader-spinner";

import { Link } from "react-router-dom";
import useAllProducts from "../../../Hooks/useAllProducts";
import { TbCurrencyTaka } from "react-icons/tb";
import Heading from "../../../Components/Shared/Heading";
import { useEffect, useState } from "react";
const AllProductList = () => {
    const [products] = useAllProducts();
    console.log(products)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = products.filter((product) =>
            product?.product_name.toLowerCase().includes(term)
        );

        setFilteredProducts(filtered);
    };
    return (
        <div className="max-w-sm md:max-w-md lg:max-w-6xl mx-auto my-10">
            <div className="text-center p-10">
                <Heading title="Mange Products" subtitle={"Explore Our Products"} />
                <input
                    className="h-12 px-5 rounded-[7px] w-full lg:w-1/2 focus:outline-none bg-gray-200"
                    type="text" placeholder="Search Products..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {
                filteredProducts?.length > 0 ?
                    filteredProducts?.map(product =>
                        <div key={product?._id} className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
                            <div className="flex items-center">
                                <img
                                    className="rounded-full h-16 w-16"
                                    src={product?.product_image}
                                />
                                <div className="ml-2 flex flex-col gap-1">
                                    <div className="leading-snug text-sm text-gray-900 font-bold">
                                        {product?.product_name}
                                    </div>
                                    <div className="leading-snug text-xs flex items-center text-gray-600">
                                        {product?.product_price}
                                        <TbCurrencyTaka />
                                    </div>
                                </div>
                            </div>
                            <Link to={`/dashboard/update-product/${product?._id}`} className="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">
                                Update
                            </Link>
                        </div>
                    )
                    :
                    <div>
                        <p className="text-center">Not Found</p>
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

    );
};

export default AllProductList;