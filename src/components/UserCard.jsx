import { useAuth } from "../contexts/AuthContext"

function UserCard() {
    const {onlineUser} = useAuth();
    return (
        <div className="text-center text-white">
            Welcome, {onlineUser?.name}!
        </div>
    )
}

export default UserCard