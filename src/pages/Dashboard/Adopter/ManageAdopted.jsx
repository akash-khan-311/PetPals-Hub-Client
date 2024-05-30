import { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { getAdoptedPets, petUpdateStatus } from '../../../api/pet'
import PetDataRow from '../../../components/Dashboard/Sidebar/TableRows/PetDataRow'
import toast from 'react-hot-toast'
import ManageAdoptedRow from '../../../components/Dashboard/Sidebar/TableRows/ManageAdoptedRow'
import Loader from '../../../Loader/Loader'

const ManageAdopted = () => {
  const { user } = useAuth()
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getAdoptedPets(user?.email).then(data => {
      setPets(data)
      setLoading(false)
    })
  }, [user?.email])

  const handleManagePet = async id => {
    try {
      const data = await petUpdateStatus(id)
      if (data.modifiedCount > 0) {
        toast.success('Pet Status Updated')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(loading) return <Loader/>

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              {pets.length ? (
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Pet name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        user info
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        donation
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        status
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Age
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
                    {/* Table row data */}
                    {pets.map(pet => (
                      <ManageAdoptedRow
                        handleManagePet={handleManagePet}
                        key={pet._id}
                        pet={pet}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 className='text-3xl md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4'>
                  No one has booked the room yet
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ManageAdopted
