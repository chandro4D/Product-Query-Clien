

import { useContext, useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import axios from 'axios';
import HomeCard from '../HomeCard/HomeCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(AuthContext)
    const [queries, setQueries] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/queries`
            )
            setQueries(data)
        }
        getData()
    }, [user])
    console.log(queries)
    return (
        <div className='mt-[80px]'>
            <div>
                <h3 className='text-4xl font-black text-pink-400 text-center'>YOU CAN DISCOVER SOME ALTERNATIVE PRODUCTS HEAR</h3>
            </div>
            <br />
            <br />
            <div className='mb-[100px]'>
                <Slider></Slider>
            </div>
            <div className='mb-[100px]'>
                <div className="hero mt-10 w-[1300px] h-[400px] mb-10 ml-[80px] " style={{ backgroundImage: 'url(https://i.ibb.co/TtPy6tw/outdoor-balcony-1203-2566.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
                    <div className=" text-center  ">
                        <div className="">
                            <h1 className="mb-5 text-3xl text-white font-semibold">YOU CAN SEE ALL POST OR QUERIES HEAR </h1>
                            <h1 className="mb-5 text-6xl font-black text-yellow-600 ">CLICK</h1>
                            <p className="mb-5 text-3xl font-medium text-white">THE BUTTON TO GO THE ALL QUERIES BUTTON .</p>
                            <br />
                            <Link to='/queries'><button className="btn bg-yellow-600 text-yellow-50 w-[200px]">ALL QUERIES</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-3xl text-center font-bold text-pink-400'>SEE SOME RECENT QUERIES</h3>
            </div>
            <br />
            <div className=" lg:grid lg:grid-cols-3 lg:mr-[50px] lg:ml-[90px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px] mt-10 mb-10">
                {
                    queries.map(query => <HomeCard key={query._id} query={query}></HomeCard>)
                }
            </div>

        </div>
    );
};
// 
export default Home;