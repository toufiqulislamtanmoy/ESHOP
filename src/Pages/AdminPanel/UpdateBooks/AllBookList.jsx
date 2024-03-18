import { BallTriangle } from "react-loader-spinner";
import useAllbooks from "../../../Hooks/useAllProducts";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AllBookList = () => {
    const [allBooks] = useAllbooks();
    return (
        <div className={`mb-10 ${allBooks.length < 6 ? 'h-[100vh]' : ''}`}>
            <SectionTitle title={"All Items"} />
            <div className="overflow-x-auto w-full">
                {allBooks.length > 0 ?
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="font-Russo">Book Details</th>
                                <th className="font-Russo">Transaction Date</th>
                                <th className="font-Russo">Transaction ID</th>
                                <th className="font-Russo">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allBooks.map(singleItem =>
                                    <tr key={singleItem._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask  w-12 h-12">
                                                        <img src={singleItem.bookCoverImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{singleItem.bookName}</div>
                                                    <div className="text-sm opacity-50">{singleItem.category}</div>
                                                    <div className="text-sm opacity-50">{singleItem.authorName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="">{singleItem.price}</span>
                                        </td>
                                        <td>
                                            <span className=""> {singleItem.copiesAvailable}</span>
                                        </td>
                                        <td>

                                            <Link to={`/dashboard/updateBook/${singleItem._id}`} className=" text-success"> <FontAwesomeIcon icon={faFilePen} /></Link>
                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table> :
                    <div>
                        <p className="text-center">No Purchase History Found</p>
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
    );
};

export default AllBookList;