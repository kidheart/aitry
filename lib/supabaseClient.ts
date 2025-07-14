import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hytlimmziynsyjvoaojv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5dGxpbW16aXluc3lqdm9hb2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MTgyODksImV4cCI6MjA2Nzk5NDI4OX0.1514uD6xVUXBs72oHiY4b_kjsl6Tg0bdrj-kxAyTW00';

export const supabase = createClient(supabaseUrl, supabaseKey); 