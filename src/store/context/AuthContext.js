import React, { createContext, useReducer } from 'react';

const initialState = {
  authorized: false,
  user: null,
  access_token: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const { authorized, user } = action.payload
      return ({
        ...state,
        authorized,
        user,
        // access_token:
      })
    }
    case 'LOGIN': {
      const { user, access_token } = action.payload
      return ({
        ...state,
        authorized: true,
        user,
        access_token
      })
    }
    case 'VERIFY':
      return {
        ...state,
        authorized: true
      }
    case 'REGISTER': {
      const { user } = action.payload
      return {
        ...state,
        user,
      }
    }
    case 'LOGOUT':
      const { user } = action.payload
      return {
        ...state,
        user,
        authorized: false
      }
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: action.payload
      }
    default:
      return { ...state }
  }
}

const AuthContext = createContext({
  ...initialState,
  initUser: () => Promise.resolve(),
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  update: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  getUser: () => Promise.resolve(),
  sendRecoverPassword: () => Promise.resolve(),
  changePassword: () => Promise.resolve(),

  addNotifiToken: () => Promise.resolve(),
});

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const initUser = async (access_token) => {
    try {
        const response = {}
            
        if (response.data.access_token) {
            dispatch({
            type: "LOGIN",
            payload: { user: response.data.user, access_token: response.data.access_token }
            })
        }
        return response.data
    } catch (err) {
        console.log(err);
        return false
    }
  }

  const login = async (username, password, notifi_token)=> {
    try {
        const response = {}
        if (response.data.access_token) {
            dispatch({
            type: "LOGIN",
            payload: { user: response.data.user, access_token: response.data.access_token }
            })
        }
        return response.data;
    } catch (err) {
        console.log(err)
        return false
    }
  }

  const register = async (regData) => {
    try {
        const response = await axios.post(SERVER_URL + "auth/register", regData)

        console.log("register response: ", response.data);
        if(!response.data)
            return false
        else
            return true
    } catch (err) {
      console.log("Regiser Error: ", error);
    }
  }

  const update = async (id, regData) => {
    try {
        const response = {}
        console.log("update response: ", response.data);
        if(response.data.hasOwnProperty('status'))
            return false
            
        // const { user } = response.data
        dispatch({
            type: "UPDATE_PROFILE",
            payload: response.data
        })
        return true
    } catch (err) {
        console.log("Regiser Error: ", err);
    }
  }

  const logout = async(userId) => {
    dispatch({ 
      type: 'LOGOUT',
      payload: { user: null }
    })
  }

  const getUser = async (userid, access_token) => {
    try {
        const response = {}

        return response.data;
    } catch (err) {
        console.log(err);
    }
  }
  
  const sendRecoverPassword = (email) => {
        // return axios.post(SERVER_URL + 'users/recover-password', { email })
        return {}
  }
  
  const changePassword = (info) => {
        // return axios.post(SERVER_URL + 'users/change-password', info)
        return {}
  }

  const addNotifiToken = (userId, token) => {
        // return axios.post(SERVER_URL + 'users/fcm-token', {userId, token})
        return {}
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        initUser,
        login,
        register,
        update,
        logout,
        getUser,
        sendRecoverPassword,
        changePassword,

        addNotifiToken,
      }}
    >
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContext
