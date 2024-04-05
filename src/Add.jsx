import React, { useState } from 'react'
import { signInWithPopup, signOut, signInWithRedirect } from 'firebase/auth'
import { googleAuthProvider, auth, } from './javascript-config'
import { db } from "./javascript-config"


function Add() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submit = async () => {
        alert("hello")
    }

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    const logout = async () => {
        try {
            await signOut(auth, googleAuthProvider)
            alert("logout")
        } catch (error) {
            console.log(error);
            return false
        }
    }



    return (
        <div>
            <div classname="container">
                <div className="d-flex justify-content-center" >
                    <form style={{ background: "lightblue", padding: "20px", margin: "20px" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <center>
                    <button type="button" className="btn btn-primary" style={{ margin: "20px", color: "white" }} onClick={login}>
                        Google login
                    </button>
                    <button type="button" onClick={logout} className="btn btn-primary">Google logout</button>
                </center>
            </div>
        </div>

    )
}

export default Add