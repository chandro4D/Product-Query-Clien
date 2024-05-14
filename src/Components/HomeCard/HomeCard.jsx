import { Link } from "react-router-dom";

const HomeCard = ({ query }) => {
    const { QueryTitle, BoycottingReasonDetails, ProductBrand, ProductName, name, date, image, ImageURL,email } = query;
    return (
        <div className="card  bg-base-100 shadow-xl mb-[100px] lg:mr-[40px]  sm:mr-[0px]">

            <figure><img className="h-[180px] w-[300px] rounded-xl" src={query.ImageURL} /></figure>
            <div className="card-body ml-5">
                <h2 className=" text-xl font-bold text-white">Product Name:{query.ProductName}</h2>
                <div className=" ">
                    <div className="">
                        <h2 className=" text-xl font-bold text-white">Product Brand:{query.ProductBrand}</h2>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">Query Title:{query.QueryTitle}</p>
                    </div>
                </div>
                <p className="text-amber-500 text-center">Alternation Reason <br /> <span className="text-pink-500">{query.BoycottingReasonDetails}</span> </p>
                <div className=" justify-between">
                    <div className="">
                        <h2 className=" text-xl font-bold text-white">Date Posted : {query.date}</h2>
                    </div>

                </div>
                <div><h3 className="text-center text-lg font-medium">Added By</h3></div>
                <div><h3 className="text-center">---------------------------------</h3></div>
                <div className=" text-lg font-medium flex">
                    <div className="mr-5">
                        <img className="w-[60px] h-[60px] rounded-full" src={query.image} />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-center">Name : {query.name}</h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeCard;