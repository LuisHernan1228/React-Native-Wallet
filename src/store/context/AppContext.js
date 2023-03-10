import React, { createContext, useEffect, useReducer } from 'react';
import useAuth from '../../hooks/useAuth';

const initialState = {
    spin: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'APP_INIT':
            break;
        case 'UPDATE_DATA':
            return ({
                ...state,
                ...action.payload
            })
        default:
            break;
    }
}

const AppContext = createContext({
    ...initialState,

    init: () => {}
})

export const AppDataProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { access_token, user} = useAuth();

    useEffect(() => {
        dispatch({
            type: "APP_INIT"
        })
    }, [])

    const updateAppData = (data = {}) => {
        dispatch({
          type: 'UPDATE_DATA',
          payload: data
        })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                updateAppData
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
