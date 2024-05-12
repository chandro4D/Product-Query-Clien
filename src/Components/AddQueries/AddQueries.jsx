
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProviders/AuthProviders';

const AddQueries = () => {


    const navigate = useNavigate();

    const { user } = useContext(AuthContext);


    const handleAddQuery = event => {
        event.preventDefault();
        const form = event.target;

        const ProductName = form.ProductName.value;
        const ProductBrand = form.ProductBrand.value;
        const ImageURL = form.ImageURL.value;
        const QueryTitle = form.QueryTitle.value;
        const BoycottingReasonDetails = form.BoycottingReasonDetails.value;
        const email = user.email;
        const name = user.displayName;

        const recommendationCount = 0;
        const image = user.photoURL;
        var timestamp = Date.now();
        var currentDate = new Date(timestamp);
        var date = currentDate.toISOString().split('T')[0];

        const newQuery = { recommendationCount, date, email, name, image, ProductName, ProductBrand, ImageURL, QueryTitle, BoycottingReasonDetails }
        console.log(newQuery);
        // send data to the server
        fetch('http://localhost:5000/query', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuery)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Add New Query Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })
                    navigate('/')
                }

            })
    }

    return (
        <div className="mt-10 mb-10 ml-[190px] bg-slate-500 w-[1120px] h-[350px] rounded-xl">
            <form onSubmit={handleAddQuery} className="pt-8 lg:pl-12 sm:pl-0">
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Product Name" required name="ProductName" />
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
                    <button className="w-full h-full text-white"> Add Query</button>
                </div>

            </form>
        </div>
    );
};

export default AddQueries;