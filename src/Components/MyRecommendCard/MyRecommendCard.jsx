

const MyRecommendCard = ({ recommendOne }) => {
    const { RecommendedproductName, recomenderName, RecommendedProductImage,recommenderEmail,recommendDate } = recommendOne;
    return (
        <div className="overflow-x-auto bg-slate-300 mb-2 w-[1320px] ml-[100px]">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <div className=" flex rounded-sm">
                                <div className="mr-12">
                                    <h3 className="text-xl font-medium text-sky-600">Recommended Product Image</h3>

                                    <img className="w-[150px] h-[100px] ml-[40px] rounded-xl" src={RecommendedProductImage} />
                                </div>
                                <div className="mr-12 ">
                                    <h3 className="text-xl font-medium text-sky-600"> Recommended Product Name</h3>
                                    <br />
                                    <h3 className="text-2xl font-medium text-pink-600 text-center">{ RecommendedproductName}</h3>
                                </div>
                                <div className="mr-12 ">
                                    <h3 className="text-xl font-medium text-sky-600"> Recomender Name</h3>
                                    <br />
                                    <h3 className="text-2xl font-medium text-pink-600 text-center">{ recomenderName}</h3>
                                </div>
                                <div className="text-center mr-5">
                                    <h3 className="text-xl font-medium text-sky-600"> Recommender Email</h3>
                                    <h3 className="text-2xl font-medium text-pink-600 text-center">{recommenderEmail}</h3>
                                    <br />
                                    <h3 className="text-2xl font-medium text-black text-center">{recommendDate}</h3>
                                </div>
                                <div className=" mt-[60px]  ">
                                    <button className="text-center w-[60px] h-[40px] bg-red-600 rounded-[5px] ">Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>


            </table>
        </div>
    );
};

export default MyRecommendCard;