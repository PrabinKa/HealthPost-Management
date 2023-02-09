import React from 'react';
import { Alert } from 'react-native'

export const Authcontext = React.createContext()

const Authprovider = ({children}) => {
  const [userToken, setUserToken] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [loginLoader, setLoginLoader] = React.useState(false)
  const [logoutLoader, setLogoutLoader] = React.useState(false)

  const Login = async({email, password}) => {
    setLoginLoader(true)
    // await fetch("http://10.0.2.2/healthpost/api/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    // .then((response) => response.json())
    // .then((resp) => {
    //   console.warn("resp", resp)
    //   if(resp.message){
    //     Alert.alert("Error", resp.message)
    //   } else if(resp.token){
    //     setUserToken(resp.token)
    //   }
    // })
    setUserToken('Prabin')
    setLoginLoader(false)
  }

  const Logout = async() => {
    setLogoutLoader(true)
    setUserToken(null)
    setLogoutLoader(false)
  }

  return (
    <Authcontext.Provider value={{userToken, Login, Logout, isLoading, loginLoader, logoutLoader}} >
      {children}
    </Authcontext.Provider>
  )
}

export default Authprovider