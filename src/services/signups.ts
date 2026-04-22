import { supabase } from '@/lib/supabase'
import type { SignupPayload } from '@/types/signup'

export async function submitSignup(payload: SignupPayload): Promise<void> {
  const url = import.meta.env.VITE_SUPABASE_URL
  if (!url) {
    await new Promise((r) => setTimeout(r, 800))
    return
  }

  const { error } = await supabase.from('signups').insert([payload])
  if (error) throw new Error(error.message)
}
