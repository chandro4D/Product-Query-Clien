import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import MyRecommendCard from "../MyRecommendCard/MyRecommendCard";


const MyRecomendation = () => {
    const { user } = useContext(AuthContext)
    const [myRecommend, setMyRecommend] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/recommend/${user?.email}`
            )
            setMyRecommend(data)
        }
        getData()
    }, [user])
    console.log(myRecommend)
    return (
        <div className="mb-[60px]">
            {myRecommend.length === 0 ? (
                <div className="mb-[40px]">
                    <h2 className="text-center text-pink-500 text-5xl font-bold">NO ONE HAS RECOMMEND YOUR QUERY YET !!</h2>
                </div>
            )
                :
                (
                    <div>
                        {
                            myRecommend.map(recommendOne => <MyRecommendCard key={recommendOne._id} recommendOne={recommendOne}></MyRecommendCard>)
                        }
                    </div>
                )}


        </div>
    );
};

export default MyRecomendation;