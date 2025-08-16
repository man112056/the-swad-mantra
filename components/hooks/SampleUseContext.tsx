import { createContext, useContext } from "react";


const UserContext = createContext('');

function UserDetails(){
    const userName = useContext(UserContext);
    return (
        <div>
            <h2>User Details</h2>
            <p>{userName}</p>
        </div>
    );

}

export default function ProfilePage(){
    return(
        <UserContext.Provider value="Manish">
        <UserDetails/>
        </UserContext.Provider>

    )
}