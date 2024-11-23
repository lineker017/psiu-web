import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<t> = [t, Dispatch<SetStateAction<t>>]

const useStorage = <T>(key: string, initialState: T): Response<T> => {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export { useStorage }
