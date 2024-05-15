// import { useContext } from "react";
// import { AuthContext } from "../../AuthProviders/AuthProviders";
// import Swal from "sweetalert2";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Swal from "sweetalert2";


const Details = () => {
    
     const navigate = useNavigate();
    const detail = useLoaderData();
    const { _id, QueryTitle, BoycottingReasonDetails, ProductBrand, ProductName, name, date, image, ImageURL, email } = detail;

    
    console.log(_id)


    const { user } = useContext(AuthContext);




    //-----------------------------post data---------------------------------------------
    const HandleAdded = e => {
        e.preventDefault();
        const form = e.target;

        const RecommendationTitle = form.RecommendationTitle.value;
        const RecommendedproductName = form.RecommendedproductName.value;
        const RecommendedProductImage = form.RecommendedProductImage.value;
        const Recommendationreason = form.Recommendationreason.value;
        
        const recommenderEmail = user.email;
        const recomenderName = user.displayName;
        // const name = user.displayName;
        // const recommend = useLoaderData();
        // const {_id} =  recommend;

        const queryId = _id;
        
        const userEmail = email;
        const userName = name;
        // const recommendationCount = 0;
        // const image = user.photoURL;
        var timestamp = Date.now();
        var currentDate = new Date(timestamp);
        var recommendDate = currentDate.toISOString().split('T')[0];
        const oldQueryTitle = QueryTitle;

        const recommendationData = { oldQueryTitle,userName,userEmail ,queryId,recommendDate,recommenderEmail,recomenderName, RecommendationTitle,RecommendedproductName,RecommendedProductImage,Recommendationreason }
        console.log(recommendationData);
        // send data to the server 'http://localhost:5000/recommend'
        // 
        fetch(`${import.meta.env.VITE_API_URL}/recommend`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recommendationData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Add Recommendation Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })
                    navigate('/')
                }

            })
    }
    
    return (
        <div>
            <div className="w-[1200px] h-[600px] ml-[150px] mb-[150px] flex" >
                <div className="w-[600px] h-[600px] ">
                    <div className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">

                        <figure><img className="w-[440px] h-[250px] rounded-xl mt-[60px]" src={ImageURL} /></figure>
                        <div className="card-body">


                            <h2 className="ml-5 text-xl font-bold text-amber-500 text-center">ALTERNATION REASON </h2>
                            <p className="text-white text-center text-lg">{BoycottingReasonDetails}</p>
                            <div className="divider"></div>
                            <div className="ml-11">
                                <div className="">
                                    <h2 className=" text-xl font-bold text-white">PRODUCT NAME : {ProductName}</h2>
                                </div>
                                <div className="">
                                    <h2 className=" text-xl font-medium text-white">PRODUCT BRAND  : {ProductBrand}</h2>
                                </div>

                                <div>
                                    <p className="text-xl font-medium  text-white"> QUERY TITLE : {QueryTitle}</p>
                                </div>
                            </div>

                            <div className=" text-xl font-bold text-center text-black mb-1">
                                <div>
                                    <h2>{date}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[600px] h-[600px] ">
                    <div className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">

                        <figure><img className="w-[440px] h-[250px] rounded-xl mt-[60px]" src={image} /></figure>
                        <div className="card-body">

                            <br />
                            <h2 className="ml-5 text-xl font-bold text-amber-500 text-center">ADDED BY </h2>

                            <div className="divider"></div>
                            <div className="ml-11">
                                <div className="">
                                    <h2 className=" text-xl font-bold text-white"> NAME : {name}</h2>
                                </div>
                                <div className="">
                                    <h2 className=" text-xl font-bold text-white">Email : {email}</h2>
                                </div>
                            </div>
                            <br />
                            <div className=" text-xl font-bold text-center text-black mb-1">
                                <div>
                                    <h2>{date}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-10 mb-10 ml-[190px] bg-slate-500 w-[1120px] h-[350px] rounded-xl">
                <form onSubmit={HandleAdded} className="pt-20 lg:pl-12 sm:pl-0">
                    <div className="flex">
                        <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                            <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Recommendation Title" required name="RecommendationTitle" />
                        </div>
                        <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                            <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Recommended product Name" required name="RecommendedproductName" />
                        </div>
                    </div>
                    <br />
                    <div className="flex">
                        <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                            <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Recommended Product Image" required name="RecommendedProductImage" />
                        </div>
                        <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                            <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Recommendation reason" required name="Recommendationreason" />
                        </div>
                    </div>
                     <br />
                    <div className=" lg:w-[1040px] sm:w-[250px]]  h-[50px] bg-violet-800 rounded-2xl">
                        <button className="w-full h-full text-white font-semibold"> ADD  RECOMMENDATION </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Details;