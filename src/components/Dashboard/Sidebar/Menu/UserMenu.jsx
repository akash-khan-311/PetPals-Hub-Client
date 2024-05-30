import MenuItem from '../MenuItem'
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import useAuth from '../../../../hooks/useAuth'
import useRole from '../../../../hooks/useRole'
import { FcDonate } from 'react-icons/fc'
import { useState } from 'react'
import { becomeAdopter } from '../../../../api/auth'
import toast from 'react-hot-toast'
import AdopterRequestModal from '../../../Modal/AdopterRequestModal'

const UserMenu = () => {
  const [role] = useRole()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  const modalHandler = async () => {
    try {
      const data = await becomeAdopter(user?.email)
      console.log(data)
      if (data.modifiedCount > 0) {
        toast.success('Success!, Please wait for admin confirmation.')
      } else {
        toast.success('Please!, Wait for admin approval👊')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsOpen(false)
    }
  }
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Adoption'
        address='my-adoption'
      />

      {role === 'user' && (
        <div
          onClick={() => setIsOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Adopter</span>
        </div>
      )}
      <AdopterRequestModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </>
  )
}

export default UserMenu
