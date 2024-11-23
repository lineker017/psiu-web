import { ReactNode } from 'react'

import { Student } from '@/http/auth/authenticate-with-password'

export interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextType {
  signed: boolean
  student: Student | null
  handleStudent(student: Student): void
  signOut(): void
}
