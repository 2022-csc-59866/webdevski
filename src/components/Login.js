import { useState } from 'react'
import { supabase } from "../server/client.js"
import {
  Auth,
} from '@supabase/auth-ui-react'

import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

function Login() {
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}

      />
    </div>
  );
}
export default Login;