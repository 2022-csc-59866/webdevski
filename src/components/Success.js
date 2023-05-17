import React, { useEffect, useState } from 'react'
import { supabase } from "../server/client.js"

import {
  Auth,
} from '@supabase/auth-ui-react'

import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';
function Success(){
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        async function getUserData(){
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    },[]);
    async function signOutUser(){
        console.log(Object.keys(user)[0]);
        const {error} = await supabase.auth.signOut();
        navigate("/login");
    }
    return (
        <div className="App">
            <header className="App-header">
            {   Object.keys(user) !== 0?
                <>
                <h1> Logged in</h1>
                <button onClick={() => signOutUser()}> Sign Out</button>
                </>
            :
                <>
                <h1> Logged In</h1>
                <button onClick={() => {navigate("/login")}}> Login</button>
                </>
            }
            </header>
        </div>
    ) 
}
export default Success;