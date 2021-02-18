import { GroupsProvider } from "../data/data"

const Groups = () => {
    return (
        <GroupsProvider.Consumer>
            {value => value.groups.map(group => group.tasks.map(task => <div>task.name ?? error</div>)) ?? <div>error!!!</div>}
        </GroupsProvider.Consumer>
    );
}

export default Groups;