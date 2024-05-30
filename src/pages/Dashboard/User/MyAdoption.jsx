import { useEffect, useState } from 'react'

import useAuth from '../../../hooks/useAuth'
import { cancelAdoption, getUserAdoptions } from '../../../api/pet'
import Loader from '../../../Loader/Loader'
import MyAdoptionsRows from '../../../components/Dashboard/Sidebar/TableRows/MyAdoptionRows'
import HelmetCom from '../../../components/Helmet/Helmet'
import Swal from 'sweetalert2'

const MyAdoption = () => {
  const { user } = useAuth()
  const [adoptions, setAdoptions] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getUserAdoptions(user?.email).then(data => {
      setAdoptions(data)
      setLoading(false)
    })
  }, [user])

  const handleCancel = async id => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then(result => {
        if (result.isConfirmed) {
          cancelAdoption(id).then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Canceled!',
                text: 'Your file has been deleted.',
                icon: 'success'
              })
              const remainingPets = adoptions.filter(pet => pet._id !== id)
              setAdoptions(remainingPets)
            }
          })
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  if (loading) return <Loader />
  return (
    <>
      <HelmetCom title={'Dashboard | My Adoptions'} />
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              {adoptions ? (
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Info
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Category
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
                    {/* Table Row Data */}
                    {adoptions &&
                      adoptions.map(pet => (
                        <MyAdoptionsRows
                          key={pet._id}
                          pet={pet}
                          handleCancel={handleCancel}
                        />
                      ))}
                  </tbody>
                </table>
              ) : (
                <h1 className='text-3xl md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4'>
                  You have not booked a room yet
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyAdoption
