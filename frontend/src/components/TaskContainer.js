import {Link} from "react-router-dom"

const TaskContainer = ({task, groupId})=>
{
    const linkContent = `/${groupId}/tasks/${task.id}`;
    return <li className="task-container"><Link to={linkContent}>{task.name}</Link></li>
}

export default TaskContainer;