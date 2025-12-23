import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function SingleUser(){
    const {id}=useParams();
    const [loading, setLoading] = useState(true);
    const [user,  setUser]=useState({});

    useEffect(()=>{
        const getUser = async () => {
            const res = await axios.get(`http://localhost:2468/users/${id}`);
            setUser(res.data);
            setLoading(false);
        };
        getUser();
    }, [id]);

    if (loading) return <p>Loading...</p>
    return(
        <div>
            <h1>User's id:{user._id}</h1>
            <p>User's email: {user.email}</p>
            <p>User's password: {user.password}</p>
        </div>
    );
}

export default SingleUser;