import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from '@headlessui/react'
import Swal from 'sweetalert2'

import { Fragment, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { savePetAdoptInfo } from '../../api/pet'
import { ImSpinner11 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

const AdoptionModal = ({ closeModal, isOpen, petInfo, setIsOpen }) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const handleAdopt = async e => {
    e.preventDefault()
    try {
      setLoading(true)
      const form = e.target
      const name = user?.displayName
      const email = user?.email
      const phone = form.phone.value
      const address = form.address.value
      const donation = form.donation.value

      const adoptInfo = {
        ...petInfo,
        user: {
          name,
          email,
          phone,
          address,
          donation,
          image: user?.photoURL
        },
        status: 'requested'
      }

      const result = await savePetAdoptInfo(adoptInfo)
      if (result.insertedId) {
        Swal.fire({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success'
        })
        setIsOpen(false)
        navigate('/dashboard/my-adoption')
      }
     
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h2'
                  className='text-xl custom-font font-semibold text-center leading-6 text-gray-900 my-5'
                >
                  Submit Your Info
                </DialogTitle>
                <form onSubmit={handleAdopt}>
                  <label className='text-gray-700 font-semibold' for='name'>
                    Name
                  </label>
                  <input
                    required
                    type='text'
                    className='focus:outline-slate-500 border-2 text-gray-700 rounded-sm py-2 px-4 w-full text-sm mb-3 '
                    placeholder='Your Name'
                    value={petInfo.user.name}
                    name='name'
                    id='name'
                    readOnly
                  />
                  <label className='text-gray-700 font-semibold' for='email'>
                    Email
                  </label>
                  <input
                    required
                    type='email'
                    className='focus:outline-slate-500 border-2 text-gray-700 rounded-sm py-2 px-4 w-full text-sm mb-3 '
                    placeholder='Your Email Adress'
                    value={petInfo.user.email}
                    name='email'
                    id='email'
                    readOnly
                  />
                  <div className='flex flex-col md:flex-row md:gap-x-5 justify-between '>
                    <div>
                      <label
                        className='text-gray-700 font-semibold'
                        for='phone'
                      >
                        Phone
                      </label>
                      <input
                        required
                        type='number'
                        className='focus:outline-slate-500 border-2 text-gray-700 rounded-sm py-2 px-4 w-full text-sm mb-3 '
                        placeholder='Enter Your Phone Number'
                        name='phone'
                        id='phone'
                      />
                    </div>
                    <div>
                      <label
                        className='text-gray-700 font-semibold'
                        for='donation'
                      >
                        Donation
                      </label>
                      <input
                        className='focus:outline-slate-500 border-2 text-gray-700 rounded-sm py-2 px-4 w-full text-sm mb-3 '
                        type='number'
                        name='donation'
                        id='donation'
                        placeholder='Enter Your Donation'
                      />
                    </div>
                  </div>
                  <label className='text-gray-700 font-semibold' for='donation'>
                    Adress
                  </label>
                  <input
                    required
                    type='text'
                    className='focus:outline-slate-500 border-2 text-gray-700 rounded-sm py-2 px-4 w-full text-sm mb-3 '
                    placeholder='Enter Your Full Adress'
                    name='address'
                    id='address'
                  />
                  <button
                    type='submit'
                    className='py-2 px-8 bg-yellow-600 font-semibold w-full rounded-md text-white hover:bg-gray-800 transition-all duration-500'
                  >
                    {loading ? (
                      <ImSpinner11 className='animate-spin m-auto' />
                    ) : (
                      'Adopt'
                    )}
                  </button>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default AdoptionModal
