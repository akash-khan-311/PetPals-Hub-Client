import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import HelmetCom from '../components/Helmet/Helmet'
const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex'>
      <HelmetCom title={'Dashboard'} />
      {/* sidebar */}
      <Sidebar />
      <div className='md:ml-64 flex-1'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default DashboardLayout
