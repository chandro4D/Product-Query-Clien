

const DetailsCard = ({ recommendOne }) => {
    const {RecommendedproductName, Recommendationreason,RecommendedProductImage, RecommendationTitle,recomenderName,recommendDate,recommenderEmail} = recommendOne;
    return (
        <div className="w-[1100px] h-[150px] bg-slate-200 rounded-[80px] ml-[200px] mb-[40px]">
            <div className="flex">
                <div className="mr-10">
                    <img className="w-[120px] h-[120px] pt-8 ml-14 " src={RecommendedProductImage} alt="" />
                </div>
                <div className="pt-8 text-xl font-medium text-sky-600 mr-10">
                    <h3>Recommended Product Name : {RecommendedproductName}</h3>
                    <h3>Recommendation Title : {RecommendationTitle}</h3>
                    <h3>Recomender Name : {recomenderName}</h3>
                
                </div>
                <div className="pt-8 text-xl font-medium text-pink-600 mr-10">
                    <h3>Recommendation Reason </h3>
                    <h3 className="text-center">{Recommendationreason}</h3>
                   
                
                </div>
                <div className="pt-8 text-xl font-medium text-sky-600 mr-10">
                    <h3>Recommend Date </h3>
                    <h3 className="text-center"> {recommendDate}</h3>
                
                </div>

            </div>
            
        </div>
    );
};

export default DetailsCard;