import { createContext, useState, useEffect } from "react"


export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            fetch("http://localhost:8000/api/data/groups", {
            })
                .then(resp => resp.json())
                .then(data => setGroups(data), err => console.log("error!!!: ", err));

        }
        fetchGroups();
    }, []);

    return (
        <GroupsContext.Provider value={
            {
                groups,
                setGroups
            }}

        >
            {children}
        </GroupsContext.Provider>
    );
}


