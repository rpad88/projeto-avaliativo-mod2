import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'


export const AuthContext = createContext({
    auth: {},
    setAuth: () => {}
})

const getInitialState = () => {
    const userLogado = localStorage.getItem('lab365:user')
    return userLogado ? JSON.parse(userLogado) : []
}

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(getInitialState)

    useEffect(() => {
        // recebe o usuário logado no LoginComponent
        localStorage.setItem('lab365:user', JSON.stringify(auth))
        // console.log(auth)
    },[auth])

    // Remove os dados do lab365:user
    const LogOut = () => {
        localStorage.removeItem('lab365:user')
    }
    
    const LogIn = (user) => {
        setAuth(user)
    }

    return(
        <AuthContext.Provider value={{auth, setAuth, LogIn, LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}