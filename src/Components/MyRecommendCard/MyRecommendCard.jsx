

const MyRecommendCard = ({ recommendOne }) => {
    const { RecommendedproductName,recomenderName,RecommendedProductImage } = recommendOne;
    return (
        <div className="overflow-x-auto bg-slate-300 mb-2 w-[1200px] ml-[150px]">
            <table className="table">  
                <tbody>                                   
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                               
                                    <div className="mask mask-squircle w-[200px] h-[60px]">
                                        <h3>RecommendedProductImage</h3>
                                        <img src={RecommendedProductImage} />
                                    </div>
                                    <div className="ml-[300px] w-[200px] h-12">
                                        <h2>{recomenderName}</h2>
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