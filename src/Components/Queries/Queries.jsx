import axios from "axios";
import { useEffect, useState } from "react";
import QueriesCard from "../QueriesCard/QueriesCard";


const Queries = () => {
    
    const [query, setQuery] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/query`
            )
            setQuery(data)
        }
        getData()
    }, [])
    console.log(query)
    return (
        <div className=" lg:grid lg:grid-cols-3 lg:mr-[80px] lg:ml-[140px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px] mt-10 mb-10">
            {
                query.map(queryOne => <QueriesCard key={queryOne._id} queryOne={queryOne}></QueriesCard>)
            }
        </div>
    );
};

export default Queries;