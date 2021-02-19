import TaskContainer from "./TaskContainer"

const Tasks = ({ location }) => {
  const group = location.state.group;
  const groupId = group.id;
    return (<ul>
      {group.tasks.map(task=> <TaskContainer task={task} groupId={groupId} key={task.id} />)}
      </ul>)
  }

  export default Tasks;