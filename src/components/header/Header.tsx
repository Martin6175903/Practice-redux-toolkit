import {PiHandHeartFill} from "react-icons/pi";
import {useFavorites} from "../../hooks/useFavorites.ts";

const Header = () => {
    const { favorites } = useFavorites();
    
    return (
        <header className={"flex justify-end pt-1.5 pb-2.5 px-2.5"}>
            <PiHandHeartFill className={"size-10 cursor-pointer duration-300 hover:fill-pink-400"}/>
            <span className="bg-pink-400 rounded size-3 flex items-center justify-center py-0.5 absolute top-1 right-1 text-xs">{favorites.length}</span>
        </header>
    );
};

export default Header;