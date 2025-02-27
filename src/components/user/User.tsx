import {useActions} from "../../hooks/useActions.ts";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

const User = () => {
    const { isLoading, error, user } = useTypedSelector((state) => state.user)

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