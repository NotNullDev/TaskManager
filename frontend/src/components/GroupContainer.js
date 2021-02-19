import { Link } from "react-router-dom";

const GroupContainer = ({ group }) => {
    const handleClick = (g) => {
        console.log(g);
    }
    console.log(group);

    return (<Link to={
        {
            pathname: `/${group.id}/tasks`,
            state: {group: group}
        }} >
        <div className="group-container" onClick={handleClick.bind(this, group)}>
            {group.name}
        </div>
    </Link>)
}

export default GroupContainer;