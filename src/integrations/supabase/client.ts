// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cwxcivdmrmtxkpzdweww.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eGNpdmRtcm10eGtwemR3ZXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNjQ0ODUsImV4cCI6MjA1ODk0MDQ4NX0.hoSYpdlXyhMTRLBxi4nJyAf0kUSssVygyR_LWSbPCjY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);