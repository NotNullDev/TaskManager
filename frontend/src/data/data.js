import { createContext, useState, useEffect } from "react"


export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            const fetchedGroups = await fetch("http://51.116.118.52:8000/api/data/groups");
            console.log(fetchedGroups);
            console.log(fetchedGroups.err, "error!");
            setGroups(fetchedGroups);
        }
        fetchGroups();
    }, []);

    return (
        <GroupsContext.Provider value={
            groups,
            setGroups
        }>
            {children}
        </GroupsContext.Provider>
    );
}


