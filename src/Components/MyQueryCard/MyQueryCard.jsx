
const MyQueryCard = ({query}) => {
    const {name,date} = query;
    return (
        <div className="flex">
            <h3>{query.name}</h3>
            <h2>{query.date}</h2>
        </div>
    );
};

export default MyQueryCard;