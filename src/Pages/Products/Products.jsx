
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Heading from "../../Components/Shared/Heading";
import useAllProducts from "../../Hooks/useAllProducts";


const Products = ({ maney }) => {
    const [products] = useAllProducts();
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
        <>

            <div className="text-center p-10">
                <Heading title="Our Products" subtitle={"Explore Our Products"} />
                <input
                    className="h-12 px-5 rounded-[7px] w-full lg:w-1/2 focus:outline-none bg-gray-200"
                    type="text" placeholder="Search Products..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {/* ✅ Grid Section - Starts Here 👇 */}
            <section
                id="Products"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {filteredProducts?.length > 0 ?
                    filteredProducts?.slice(0, maney).map((product, index) =>
                        <Card key={index} productData={product} />
                    ) :
                    <div className='text-center w-full'>No Product Found</div>
                }

            </section>
            {/* 🛑 Grid Section - Ends Here */}

        </>

    );
};

export default Products;

// https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60