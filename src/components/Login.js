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

function Login() {
  return (
    <section>
      <Container className="my-5">
        <div className='jobfeed-createpost-page-content'>
          <div>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}

            />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Login;