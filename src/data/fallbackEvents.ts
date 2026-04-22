import type { Event } from '@/types/event'

export const fallbackEvents: Event[] = [
  {
    id: '1',
    title: 'Community Mixer & Meet Up',
    date: '2025-02-15',
    location: 'Brooklyn, NY',
    description: 'Come connect with your neighbors, share food, and build bonds that last.',
    image_url: '/images/fb/fb-01.jpg',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Free Food Distribution',
    date: '2025-03-08',
    location: 'East Flatbush, Brooklyn',
    description: 'We show up where it matters. No questions asked — just community taking care of community.',
    image_url: '/images/fb/fb-09.jpg',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Women\'s Empowerment Gathering',
    date: '2025-04-20',
    location: 'Crown Heights, Brooklyn',
    description: 'A space built by and for Black women to connect, heal, and rise together.',
    image_url: '/images/ig/ig-01.jpg',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'AFU Family Day',
    date: '2025-05-25',
    location: 'Prospect Park, Brooklyn',
    description: 'The whole family is invited. Food, music, kids activities, and real community love.',
    image_url: '/images/fb/fb-19.jpg',
    created_at: new Date().toISOString(),
  },
]
