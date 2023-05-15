import { useState, useEffect } from 'react'
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
function Login(){
    return(
        <div className="login">
        <h1>Sign In</h1>
        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email"></input>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"></input>
        <input type="submit"/>
        </form>
        <br />
        <p> OR</p>
        <br />
        

        </div>
    )
}