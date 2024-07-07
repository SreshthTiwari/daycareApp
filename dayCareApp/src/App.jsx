import Login from "./Components/Login/Login.jsx"
import Chat from "./Components/Chat/Chat.jsx"
import React, { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase.js"

export default function App(){

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    })

    return () => {
      unSub()
    }
  }, [])

  const user = false

  return(
    user ? 
    <>
      <Chat></Chat>
    </>
    :
    <Login></Login>
  )
}