import { useEffect, useState } from "react";
import axios from "axios";

function FetchUser(){
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        const fetchUser =async () =>{
            const res = await axios.get("http://localhost:2468/users");
            setUsers(res.data);
        };
        fetchUser();
    }, []);

    return(
       <div>
        <ul>
            {users.map((user)=>(
                <li key={user._id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>
            ))}
        </ul>   
       </div>
    );
}

export default FetchUser;