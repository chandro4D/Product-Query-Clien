import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import axios from "axios";
import MyQueryCard from "../MyQueryCard/MyQueryCard";


const MyQueries = () => {
    const { user } = useContext(AuthContext)
    const [queries, setQueries] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/queries/${user?.email}`
            )
            setQueries(data)
        }
        getData()
    }, [user])
    console.log(queries)
    return (
        <div>
            <div className="rounded-2xl hero mt-10 w-[1200px] h-[500px] mb-[100px] ml-36 " style={{ backgroundImage: 'url(https://i.ibb.co/TtPy6tw/outdoor-balcony-1203-2566.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center ">
                    <div className="">
                        <h1 className="mb-5 text-3xl text-white font-semibold">YOU CAN ADD YOUR QUERY BY</h1>
                        <h1 className="mb-5 text-6xl font-black text-yellow-600 ">CLICKING</h1>
                        <p className="mb-5 text-3xl font-medium text-white"> THE ADD QUERIES BUTTON </p>
                        <br />
                        <br />
                        <Link to='/addQueries'><button className="btn bg-yellow-600 text-yellow-50 w-[200px] text-xl">ADD QUERY</button></Link>
                    </div>
                </div>
            </div >
            <div className=" lg:grid lg:grid-cols-3 lg:mr-[80px] lg:ml-[140px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px] mt-10 mb-10">
                {
                    queries.map(query => <MyQueryCard key={query._id} query={query}></MyQueryCard>)
                }
            </div>


        </div>
    );
};

export default MyQueries;