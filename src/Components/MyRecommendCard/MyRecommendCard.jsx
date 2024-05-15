import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MyRecommendCard = ({ recommendOne }) => {
    const {_id, RecommendedproductName, recomenderName, RecommendedProductImage,recommenderEmail,recommendDate } = recommendOne;

    // --------------------delete-----------------------
    const navigate = useNavigate()
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/recommend/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate('/')
                        }
                    })
            }
        });
    }
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
                                    <button onClick={handleDelete} className="text-center w-[60px] h-[40px] bg-red-600 rounded-[5px] ">Delete</button>
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