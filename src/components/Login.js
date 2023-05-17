import { useEffect, useState } from 'react'
import { supabase } from "../server/client.js"
import {
  Auth,
} from '@supabase/auth-ui-react'

import { Button } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async (event) =>{
    if(event === "SIGNED_IN"){
      navigate("/success");
    }
    else if(event === "SIGNED_OUT"){
      navigate("/login");
    }
  })


  return (
    <section className="login-page">
      <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["discord"]}
          />
      </div>
    </section>
  );
}

export default Login;