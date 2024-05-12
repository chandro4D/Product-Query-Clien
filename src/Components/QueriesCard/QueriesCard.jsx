import { Link } from "react-router-dom";


const QueriesCard = ({queryOne}) => {
    const {QueryTitle,BoycottingReasonDetails,ProductBrand,ProductName,name, date,image,ImageURL,recommendationCount} = queryOne;
    return (
        <div className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">

        <figure><img  src={queryOne.image} /></figure>
        <div className="card-body">

            <h2 className="text-center text-2xl font-bold text-amber-500">{queryOne.ProductName}</h2>
            <div className="flex justify-between">
                <div className="">
                    <h2 className="text-center text-xl font-medium text-black">{queryOne.ProductBrand}</h2>
                </div>
                <div>
                    <p className="text-xl font-medium text-center text-lime-700">{queryOne.QueryTitle}</p>
                </div>
            </div>

            <div className="divider"></div>

            <p className="text-amber-500 text-center">{queryOne.BoycottingReasonDetails}</p>
            <div className="flex justify-between">
                <div className="">
                    <h2 className="text-center text-xl font-medium text-black">{queryOne.date}</h2>
                </div>
                <div>
                    <p className="text-xl font-medium text-center text-lime-700">{queryOne.recommendationCount}</p>
                </div>
            </div>



            <div className="card-actions justify-center  ">
                <Link><button className="btn bg-green-400 text-white">Recommend</button></Link>
            </div>
            <div className="justify-center">
                <h3 className="text-center">Added By</h3>
                <h3 className="text-center">{queryOne.name}</h3>
                <img className="w-[350px] h-[150px]" src={queryOne.image}  />
            </div>
        </div>
    </div>
    );
};

export default QueriesCard;