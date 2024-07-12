import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../lib/firebase"
import { toast } from "react-toastify"
import SignUp from "../signUp/signUp"

export default function Login(){

    const [loading, setLoading] = useState(false)
    const [login, setLogin] = useState(true)

    const handleGoToSignUp = () => {
        setLogin(false)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)

        try{
            await signInWithEmailAndPassword(auth, email, password)
            
        }
        catch(error){
            toast.warn(error)
        }
        finally{
            setLoading(false)
        }

        console.log("SD")
    }

    return(
        login ?

        <>
            <h1>Login Page</h1>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loading} onClick={handleLogin}>{loading ? "Loading" : "Sign In"}</button>
            <button onClick={handleGoToSignUp}>Not a user? Sign up</button>
        </> : <SignUp / >
    )
}