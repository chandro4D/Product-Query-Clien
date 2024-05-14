// import { useLoaderData } from "react-router-dom";

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const update = useLoaderData()
    const { _id,QueryTitle, BoycottingReasonDetails, ProductBrand, ProductName, ImageURL } = update;
    console.log(update.ProductBrand)
    console.log(_id)

    const navigate = useNavigate()

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;

        const ProductName = form.ProductName.value;
        const ProductBrand = form.ProductBrand.value;
        const ImageURL = form.ImageURL.value;
        const QueryTitle = form.QueryTitle.value;
        const BoycottingReasonDetails = form.BoycottingReasonDetails.value;
        const updatedData = { ProductName, ProductBrand, ImageURL, QueryTitle, BoycottingReasonDetails }
        console.log(updatedData);

        // send data to the server
        fetch(`${import.meta.env.VITE_API_URL}/query/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: ' Tourists Sport Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })
                    navigate('/')
                }

            })

    }
    return (
        <div className="mt-10 mb-10 ml-[190px] bg-slate-500 w-[1120px] h-[350px] rounded-xl">
            <form onSubmit={handleUpdate} className="pt-8 lg:pl-12 sm:pl-0">
                <div className="flex">

                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">

                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder='ProductBrand' required name="ProductName" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Product Brand" required name="ProductBrand" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Product Image-URL" required name="ImageURL" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Query Title" required name="QueryTitle" />
                    </div>
                </div>

                <br />
                <div className=" lg:w-[600px] sm:w-[250px] h-[50px] ml-[200px]">
                    <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Boycotting Reason Details" required name="BoycottingReasonDetails" />
                </div>
                <br />
                <div className=" lg:w-[1040px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white"> Update</button>
                </div>

            </form>
        </div>
    );
};

export default Update;