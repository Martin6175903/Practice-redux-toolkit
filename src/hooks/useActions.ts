import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {actions} from "../store/favorites/favorites.slice.ts";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as userActions from "../store/user/user.actions.ts";

const rootActions = {
    ...actions,
    ...userActions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}