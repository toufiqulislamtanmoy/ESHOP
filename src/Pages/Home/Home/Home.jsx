import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Services from "../Services/Services";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import Partners from "../Partners/Partners";
import Products from "../../Products/Products";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <Category />
            <Category2 />
            <Services />
            <MiddleBanner />
            <Products maney={10} />
            <Partners />
        </div>
    );
};

export default Home;