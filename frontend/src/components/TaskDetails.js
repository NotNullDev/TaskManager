const TaskDetails = ({match})=>
{
    const {id, task_id} = match.params;
    return (
        <div>task id: {task_id} of group {id} </div>
    )
}

export default TaskDetails;