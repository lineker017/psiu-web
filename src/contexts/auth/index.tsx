import { createContext, useCallback, useContext } from 'react'

import { useStorage } from '@/hooks/use-storage'
import { Student } from '@/http/auth/authenticate-with-password'

import { AuthContextType, AuthProviderProps } from './types'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [student, setStudent] = useStorage<Student | null>('student', null)

  const handleStudent = useCallback(
    ({ id, birthdate, createdAt, name, ra, updatedAt }: Student) => {
      setStudent({ id, birthdate, createdAt, name, ra, updatedAt })
    },
    [setStudent],
  )

  const sigOut = () => {
    setStudent(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!student,
        student,
        handleStudent,
        sigOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextType {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
