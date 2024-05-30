import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import { getRole } from '../api/auth'

const useRole = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()
  const [role, setRole] = useState(null)
  useEffect(() => {
    setIsLoading(true)
    getRole(user?.email).then(role => {
      setRole(role)
      setIsLoading(false)
    })
  }, [user])

  return [role, isLoading]
}
export default useRole
