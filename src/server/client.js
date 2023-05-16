import { createClient } from '@supabase/supabase-js'

const URL = 'https://wkfezkwkijtcpeoexjdm.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZmV6a3draWp0Y3Blb2V4amRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxOTMzODYsImV4cCI6MTk5OTc2OTM4Nn0.dcegch_GaMVZi83emrxz9EbRj9deWS6b4tLYOSfGY2I';

export const supabase = createClient(URL, API_KEY);