import { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { deletePets, getAdopterPets } from '../../../api/pet'
import PetDataRow from '../../../components/Dashboard/Sidebar/TableRows/PetDataRow'
import Swal from 'sweetalert2'

const MyAddedPets = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [pets, setPets] = useState([])

  useEffect(() => {
    setLoading(true)
    getAdopterPets(user?.email).then(data => {
      setPets(data)
      setLoading(false)
    })
  }, [user])
  const deleteHandler = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        deletePets(id).then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success'
            })
            const remainigPets = pets.filter(pet => pet._id !== id)
            setPets(remainigPets)
          }
        })
      }
    })
  }
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
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Location
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
                        Age
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Gender
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Delete
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Room row data */}{' '}
                    {pets &&
                      pets.map(pet => (
                        <PetDataRow
                          key={pet._id}
                          deleteHandler={deleteHandler}
                          pet={pet}
                        />
                      ))}
                  </tbody>
                </table>
              ) : (
                <h1 className='text-3xl md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4'>
                  You have not Added a Pet yet
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyAddedPets
