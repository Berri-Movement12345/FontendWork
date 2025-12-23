import { useParams } from "react-router-dom";

function UserProfile() {
    const {id}=useParams();
    return (
        <div>
            <h1>UserProfile</h1>
            <p>user {id}</p>
        </div>
    );
}

export default UserProfile;