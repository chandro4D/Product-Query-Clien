import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyQueryCard = ({ query }) => {
    const { _id, QueryTitle, BoycottingReasonDetails, ProductBrand, ProductName, name, date, image, ImageURL } = query;
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

                fetch(`${import.meta.env.VITE_API_URL}/query/${_id}`, {
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
        <div className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">

            <figure><img className="w-[300px] h-[200px] rounded-xl" src={query.image} /></figure>
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
                    <Link to={`/update/${_id}`}><button className="btn bg-amber-300 text-white">Update</button></Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-red-400 w-[80px] text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyQueryCard;