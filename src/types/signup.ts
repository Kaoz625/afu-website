export interface SignupPayload {
  name: string
  email: string
  message?: string
}

export interface SignupRecord extends SignupPayload {
  id: string
  created_at: string
}
