import { Link } from "react-router-dom";

const MyQueryCard = ({ query }) => {
    const {QueryTitle,BoycottingReasonDetails,ProductBrand,ProductName,name, date,image,ImageURL } = query;
    return (
        <div className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">

            <figure><img  src={query.image} /></figure>
            <div className="card-body">

                <h2 className="text-center text-2xl font-bold text-amber-500">{query.ProductName}</h2>
                <div className="flex justify-between">
                    <div className="">
                        <h2 className="text-center text-xl font-medium text-black">{query.ProductBrand}</h2>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-center text-lime-700">{query.QueryTitle}</p>
                    </div>
                </div>

                <div className="divider"></div>

                <p className="text-amber-500 text-center">{query.BoycottingReasonDetails}</p>
                <div className=" text-xl font-bold text-center text-black mb-5">
                    <div>
                        <h2>{query.date}</h2>
                    </div>
                </div>



                <div className="card-actions justify-center flex ">
                    <Link><button className="btn bg-green-400 w-[100px] text-white">View Details</button></Link>
                    <Link><button className="btn bg-amber-300 text-white">Update</button></Link>
                    <Link><button className="btn bg-red-400 w-[80px] text-white">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyQueryCard;