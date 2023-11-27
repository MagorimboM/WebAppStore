 import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://buoljlpxqxijnzxhhngv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1b2xqbHB4cXhpam56eGhobmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MzcyODgsImV4cCI6MjAxNTAxMzI4OH0.fREecLU53_FgrSphzp-h-XJOYkqsQgj5tliD5ex3iuI'

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase



