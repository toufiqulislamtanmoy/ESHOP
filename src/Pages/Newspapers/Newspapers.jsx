import { useState } from "react";
import Card from "../../Components/Cards/Card";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useAllbooks from "../../Hooks/useAllProducts";
import headerVideo from "../../assets/videos/newspaper.mp4"
import { ThreeDots } from "react-loader-spinner";
const Newspapers = () => {
    const [allBooks] = useAllbooks();
    const newspapers = allBooks.filter(book => book.category === 'Newspaper');
    const [searchText, setSearchText] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = () => {
        const filteredResults = newspapers.filter((book) =>
            book.bookName.toLowerCase().includes(searchText.toLowerCase())
        );
        if (filteredResults.length < 1) {
            setFilteredBooks({ notFound: true });
        } else {
            setFilteredBooks(filteredResults)
        }
    };
    return (
        <div>
            <PageHeader video={headerVideo} />
            <div className="h-full w-full rounded-md my-10 py-10 px-3 lg:px-16">
                <SectionTitle title={"Newspaper Collections is here"} />
                <div className="lg:flex justify-around items-center  bg-[#7c96a15f] py-5">


                    <div className="w-full md:w-1/3 px-3">
                        <form className="flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full border-1 outline-none p-3 rounded-md shadow-lg"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />

                            <button
                                type="button"
                                className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 shadow-lg'
                                onClick={handleSearch}

                            >
                                Search
                            </button>
                        </form>
                    </div>


                </div>
                {filteredBooks.notFound ?
                    <div className="flex items-center justify-center gap-2">
                        <p className="">No Data found named  <span className="font-bold"> {searchText}</span></p>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>

                    :
                    <div className="p-5 bg-[#4ac4f826] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                        {filteredBooks.length > 0 ?
                            filteredBooks.map(newspaper => <Card key={newspaper._id} book={newspaper} />)
                            : newspapers.map(newspaper => <Card key={newspaper._id} book={newspaper} />)

                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Newspapers;