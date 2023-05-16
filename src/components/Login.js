import { useState } from 'react'
import { supabase } from "../server/client.js"
import { Container } from 'react-bootstrap'
import {
  Auth,
} from '@supabase/auth-ui-react'

import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';

function Login() {
  return (
    
    <section className="login-page">
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord"]}
    <section>
      <Container className="my-5">
        <div className='jobfeed-createpost-page-content'>
          <div>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}

      />
    </div>

    </section>
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Login;