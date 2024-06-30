import { createClient } from '@supabase/supabase-js'

if (!import.meta.env.VUE_APP_SUPABASE_URL || !import.meta.env.VUE_APP_SUPABASE_KEY) {
  throw new Error('Missing Supabase ENV vars')
}

export const supabase = createClient(import.meta.env.VUE_APP_SUPABASE_URL, import.meta.env.VUE_APP_SUPABASE_KEY)

