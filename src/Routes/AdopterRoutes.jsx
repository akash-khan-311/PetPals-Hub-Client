import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import useAuth from '../hooks/useAuth'
const AdopterRoutes = ({ children }) => {
  const [role] = useRole()
  const { user } = useAuth()
  console.log(role)
  if (role === 'adopter' || user) return children
  return <Navigate to={'/dashboard'} />
}
export default AdopterRoutes
