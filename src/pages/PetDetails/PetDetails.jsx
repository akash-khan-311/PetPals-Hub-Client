import { useLoaderData, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../../shared/Button/Button'
import useAuth from '../../hooks/useAuth'
import AdoptionModal from '../../components/Modal/AdoptionModal'
import { useState } from 'react'
import Container from './../../shared/Container'
import HelmetCom from '../../components/Helmet/Helmet'
import useRole from '../../hooks/useRole'

const PetDetails = () => {
  const pet = useLoaderData()
  const [role] = useRole()
  console.log(role)
  const { user } = useAuth()
  const [petInfo, setPetInfo] = useState({
    user: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    },
    adopter: pet?.adopter.email,
    name: pet.name,
    image: pet.image,
    category: pet.category,
    location: pet.location,
    age: pet.age,
    decription: pet.decription
  })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HelmetCom title={`Details Of ${pet.name}`} />
      <section>
        <Container>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-10 my-10'>
            <div className='lg:w-1/2 w-full'>
              <img src={pet?.image} className='rounded-lg' alt='' />
            </div>
            <div className='lg:w-1/2 w-full flex flex-col '>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                {pet?.name}
              </h1>
              <div className='flex items-center gap-x-3 my-2'>
                <img
                  className='w-10 h-10 rounded-full'
                  src={pet.adopter.image}
                  alt={pet.adopter.name}
                />
                <span className='text-sm md:text-base font-semibold text-gray-600'>
                  {pet.adopter.name}
                </span>
              </div>
              <ol className='list-decimal list-inside my-5'>
                <li>
                  <span className='font-bold'>Age</span>:{pet?.age} Month
                </li>
                <li>
                  <span className='font-bold'>Age</span>:{pet?.gender} Month
                </li>

                <li>
                  <span className='font-bold'>Location:</span>: {pet?.location}
                </li>
                <li>
                  <span className='font-bold'>Descriptions</span>:{' '}
                  {pet?.description}
                </li>
              </ol>
              <motion.button
                whileTap={{ scale: 0.9, transition: { yoyo: Infinity } }}
                onClick={() => setIsOpen(true)}
                disabled={
                  (pet.adopted && pet.adopter === user?.email) ||
                  role === 'admin'
                }
                type={'button'}
                className='md:py-3 md:px-12 py-2 px-6 bg-yellow-700 uppercase text-sm md:text-base font-semibold text-white hover:bg-black transition-all duration-500 rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed'
              >
                Adopt now
              </motion.button>
            </div>
            <AdoptionModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeModal={() => setIsOpen(false)}
              petInfo={petInfo}
            />
          </div>
        </Container>
      </section>
    </>
  )
}
export default PetDetails
