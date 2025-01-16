import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions.ts";

interface IProps {
    user: {
        name: string
        id: number
        isLoading: boolean
        error: Error | null
        user: {
            name: string
            id: number
        }
    }
}

const User = () => {
    const { isLoading, error, user } = useSelector((state:IProps) => state.user)
    console.log(isLoading, error, user)
    const { getUserById } = useActions();

    return (
        <div>
            <button onClick={() => getUserById(1)}>Get User</button>
            {isLoading ? (
                <div>Loading...</div>
                ) : error ? (
                    <div>error.message</div>
                ) : user?.name ? (
                    <h1>User: {user.name}</h1>
                ) : (
                    <h1>USER NOT FOUND</h1>
            )}
        </div>
    );
};

export default User;