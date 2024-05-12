

import { useContext, useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import axios from 'axios';
import HomeCard from '../HomeCard/HomeCard';

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
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className=" lg:grid lg:grid-cols-3 lg:mr-[80px] lg:ml-[140px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px] mt-10 mb-10">
                {
                    queries.map(query => <HomeCard key={query._id} query={query}></HomeCard>)
                }
            </div>
        </div>
    );
};
// 
export default Home;