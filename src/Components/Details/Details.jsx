import { useLoaderData,  } from "react-router-dom";

const Details = () => {
    const detail = useLoaderData();
    const {ProductName,_id} = detail;
   
    console.log(detail.detail);
    console.log(_id)
    return (
        <div>
            <h3 className="text-center text-4xl text-red">Details{detail.ProductName}</h3>

            <h3 className="text-center text-4xl text-red">Details{_id}</h3>
            <h3 className="text-center text-4xl text-red">Details{ProductName}</h3>
        </div>
    );
};

export default Details;