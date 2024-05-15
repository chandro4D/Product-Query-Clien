import { Link } from "react-router-dom";


const QueriesCard = ({ queryOne }) => {
    const { QueryTitle, BoycottingReasonDetails, ProductBrand, ProductName, name, date, image, ImageURL, recommendationCount,_id } = queryOne;
    return (
        <div className="card  bg-base-100 shadow-xl mb-[100px] lg:mr-[40px]  sm:mr-[0px]">

            <figure><img className="w-[300px] h-[150px]  pt-5" src={queryOne.ImageURL} /></figure>
            <div className="card-body">

                <h2 className=" text-xl font-bold text-white">Product Name :{queryOne.ProductName}</h2>
                <div className="">
                    <div className="">
                        <h2 className=" text-xl font-medium text-white">Product Brand :{queryOne.ProductBrand}</h2>
                    </div>
                    <div>
                        <p className="text-xl font-medium  text-white">Query Title :{queryOne.QueryTitle}</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium  text-lime-700">Recommendation Count:{queryOne.recommendationCount}</p>
                    </div>
                </div>
                <h2 className="text-center text-xl font-bold text-white">Alternation Reason </h2>
                <p className="text-amber-500 text-center">{queryOne.BoycottingReasonDetails}</p>


                <h3 className="text-center text-xl font-medium">Added By</h3>
                <div className="divider"></div>

                <div className="justify-center text-xl font-medium flex">
                    <div className="mr-5">
                        <img className="w-[60px] h-[60px] rounded-full" src={queryOne.image} />
                    </div>
                    <div className="mt-5">
                        <h3 className="text-center">Name:{queryOne.name}</h3>
                    </div>



                </div>
                
                <div className="card-actions justify-center  ">
                    <Link to={`/details/${_id}`}><button className="btn bg-green-400 text-white">Recommend</button></Link>
                </div>
                <div className="">
                    <h2 className="text-center text-xl font-medium text-white">Date:{queryOne.date}</h2>
                </div>
            </div>
        </div>
    );
};

export default QueriesCard;