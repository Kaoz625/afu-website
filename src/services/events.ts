import { supabase } from '@/lib/supabase'
import { fallbackEvents } from '@/data/fallbackEvents'
import type { Event } from '@/types/event'

export async function fetchEvents(): Promise<Event[]> {
  const url = import.meta.env.VITE_SUPABASE_URL
  if (!url) return fallbackEvents

  const { data, error } = await supabase!
    .from('events')
    .select('*')
    .order('date', { ascending: true })

  if (error || !data?.length) return fallbackEvents
  return data as Event[]
}
