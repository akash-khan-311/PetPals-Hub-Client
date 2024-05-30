const ManageAdoptedRow = ({ pet, handleManagePet }) => {
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={pet?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{pet?.name}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{pet?.user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          ${pet?.user?.donation}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p
          className={`text-gray-900 whitespace-no-wrap text-center rounded-lg font-semibold uppercase ${
            pet.status === 'requested' ? 'bg-yellow-200' : 'bg-green-200'
          } `}
        >
          {pet?.status}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{pet?.age} Month</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          disabled={pet.status === 'verified'}
          onClick={() => handleManagePet(pet._id)}
          className='relative disabled:cursor-not-allowed disabled:text-gray-500 cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Approve</span>
        </button>
      </td>
    </tr>
  )
}
export default ManageAdoptedRow
