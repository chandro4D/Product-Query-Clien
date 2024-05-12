import { Link } from "react-router-dom";


const MyQueries = () => {
    return (
        <div>
            <div className="rounded-2xl hero mt-10 w-[1200px] h-[500px] mb-10 ml-36 " style={{ backgroundImage: 'url(https://i.ibb.co/TtPy6tw/outdoor-balcony-1203-2566.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center ">
                    <div className="">
                        <h1 className="mb-5 text-3xl text-white font-semibold"></h1>
                        <h1 className="mb-5 text-6xl font-black text-yellow-600 "></h1>
                        <p className="mb-5 text-3xl font-medium text-white"> </p>
                        <Link to='/addQueries'><button className="btn bg-yellow-600 text-yellow-50 w-[200px]">Add Queries</button></Link>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default MyQueries;