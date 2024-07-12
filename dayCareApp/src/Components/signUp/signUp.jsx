import React, { useState } from "react";

export default function SignUp(){

    const [loading, setLoading] = useState(false)

    const handleRegister = () => {
        console.log("Hello")
    }

    return(
        <div>
            <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
            <label htmlFor="file">
                {/* <img src={avatar.url || "./avatar.png"} alt="" /> */}
                Upload an image
            </label>
            <input
                type="file"
                id="file"
                style={{ display: "none" }}
                // onChange={handleAvatar}
            />
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
            </form>
        </div> 
    )
}