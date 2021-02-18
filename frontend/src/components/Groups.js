import { GroupsContext } from "../data/data"
import GroupContainer from "./GroupContainer"

const Groups = () => {
    const sortFunc = (a, b) => {
        return a.id - b.id;
    }

    return (
        <ul>
            <GroupsContext.Consumer>
                {value => value.groups.sort(sortFunc).map(group => <GroupContainer group={group} key={group.id} />)}
            </GroupsContext.Consumer>
        </ul>
    );
}

export default Groups;