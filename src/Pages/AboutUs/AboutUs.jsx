import { MdDeliveryDining } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Your Trusted E-Commerce Partner
          </p>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            At ESHOP, we are dedicated to providing you with the best shopping experience possible.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                
                <MdDeliveryDining className="w-16 h-16 mx-auto mb-4"/>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  To deliver a seamless and enjoyable shopping experience, with a wide range of products at competitive prices.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                
                <MdVerified className="w-16 h-16 mx-auto mb-4"/>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  To be the go-to e-commerce platform, known for quality products and exceptional customer service.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <FcCustomerSupport className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Values</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Customer satisfaction, integrity, and continuous improvement drive our success.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl leading-7 font-semibold text-gray-900">Why Shop With Us?</h3>
            <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-gray-600">
              We offer a carefully curated selection of products from trusted brands, fast and reliable shipping, and a customer service team that is always ready to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
