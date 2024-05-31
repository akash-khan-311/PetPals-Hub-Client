import { useEffect, useState } from 'react'

import { getAllUsers } from '../../../api/auth'
import UserDataRow from '../../../components/Dashboard/Sidebar/TableRows/UserDataRow'
import HelmetCom from '../../../components/Helmet/Helmet'
import { useQuery } from '@tanstack/react-query'
const ManageUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getAllUsers().then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  // const {
  //   data: users,
  //   isLoading,
  //   error,
  //   refetch
  // } = useQuery({
  //   enabled: true,
  //   queryKey: ['users'],
  //   queryFn: async () => await getAllUsers()
  // })

  return (
    <>
      <HelmetCom title={'Dashboard | Manage Users'} />
      <div className='py-8 overflow-x-hidden'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Role
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Status
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map(user => <UserDataRow key={user._id} user={user} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default ManageUsers
