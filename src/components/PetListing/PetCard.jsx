/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import Button from '../../shared/Button/Button'

/* eslint-disable react/no-unescaped-entities */
const PetCard = ({ pet }) => {
  const { name, image, age, location, category, _id } = pet

  return (
    <>
      <div className='relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl'>
        <div className='relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40'>
          <img src={image} className='w-full h-full' alt='pet image' />
        </div>
        <div className='p-6'>
          <h5 className='block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
            {name}
          </h5>
          <div>
            <li>Category : {category}</li>
            <li>Age : {age} Month</li>
            <li>Location : {location}</li>
          </div>
        </div>
        <div className='p-6 pt-0'>
          <Link className='' to={`/pet/${_id}`}>
            <button className='md:py-2 md:px-12 py-2 px-6 bg-yellow-700 uppercase text-sm md:text-base font-semibold text-white hover:bg-black transition-all duration-500 rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed w-full'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default PetCard
