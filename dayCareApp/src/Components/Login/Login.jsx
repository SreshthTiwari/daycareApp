import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../lib/firebase"
import { toast } from "react-toastify"

export default function Login(){

    const [loading, setLoading] = useState(false)

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
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
            </form>
        </>
    )
}