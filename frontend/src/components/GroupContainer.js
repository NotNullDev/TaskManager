import { Link } from "react-router-dom";

const GroupContainer = ({ group }) => {
    const handleClick = (g) => {
        console.log(g);
    }

    return (<Link to={`/${group.id}/tasks?group=${group}`} >
        <div className="group-container" onClick={handleClick.bind(this, group)}>
            {group.name}
        </div>
    </Link>)
}

export default GroupContainer;