import React, { createContext, useContext } from "react";
import { useUserInfoReducer } from './reducers'

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useUserInfoReducer({
        concerts: [],
        artists: [],
        venues: [],
        reviews: [],
        follow: [],
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };
