import { Link } from 'react-router-dom'

const Button = ({ label, type, adress }) => {
  return (
    <button
      type={type}
      className='md:py-3 md:px-12 py-2 px-6 bg-yellow-700 uppercase text-sm md:text-base font-semibold text-white hover:bg-black transition-all duration-500 rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed '
    >
      {label}
    </button>
  )
}
export default Button
