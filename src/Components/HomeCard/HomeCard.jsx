import { Link } from "react-router-dom";

const HomeCard = ({ query }) => {
    const { QueryTitle, BoycottingReasonDetails, ProductBrand, ProductName, name, date, image, ImageURL } = query;
    return (
        <div className="card  bg-base-100 shadow-xl mb-[100px] lg:mr-[40px]  sm:mr-[0px]">

            <figure><img className="h-[180px] w-[350px] rounded-xl" src={query.image} /></figure>
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
                <p className="text-amber-500 text-center">{query.BoycottingReasonDetails}</p>
                <div className="flex justify-between">
                    <div className="">
                        <h2 className="text-center text-xl font-medium text-black">{query.date}</h2>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-center text-lime-700">{query.recommendationCount}</p>
                    </div>
                </div>
                <div className="justify-center text-xl font-medium">
                    <h3 className="text-center">Added By</h3>
                    <h3 className="text-center">{query.name}</h3>
                    <br />
                    <img className="w-[350px] h-[150px] rounded-xl" src={query.image} />
                </div>
            </div>
        </div>
    );
};

export default HomeCard;