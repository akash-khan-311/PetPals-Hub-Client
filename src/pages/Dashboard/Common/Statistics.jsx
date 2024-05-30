import AdminStatistcs from '../../../components/Dashboard/Statistics/AdminStatistcs'
import AdopterStatistics from '../../../components/Dashboard/Statistics/AdopterStatistics'
import UserStatistics from '../../../components/Dashboard/Statistics/UserStatistics'
import useRole from './../../../hooks/useRole'
const Statistics = () => {
  const [role] = useRole()
  return (
    <>
      {role === 'user' && <UserStatistics />},
      {role === 'adopter' && <AdopterStatistics />},
      {role === 'admin' && <AdminStatistcs />}
    </>
  )
}
export default Statistics
