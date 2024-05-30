import { Navigate } from 'react-router-dom'
import Loader from '../Loader/Loader'
import useRole from '../hooks/useRole'
import useAuth from '../hooks/useAuth'

const AdminRoutes = ({ children }) => {
  const [role, isLoading] = useRole()
  const { user } = useAuth()
  if (isLoading) return <Loader />
  if (role === 'admin' || user) return children
  return <Navigate to='/dashboard' />
}
export default AdminRoutes
