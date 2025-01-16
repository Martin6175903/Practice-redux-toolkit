import {useSelector} from "react-redux";

type IProps = {
    favorites: {
        id: number
        name: string
    }[]
}

export const useFavorites = () => {
    const {favorites} = useSelector((state: IProps) => state);

    return { favorites };
}