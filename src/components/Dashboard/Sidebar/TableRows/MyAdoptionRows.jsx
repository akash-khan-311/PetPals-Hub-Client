const MyAdoptionsRows = ({ pet, handleCancel }) => {
  console.log(pet)
  const { name, image, _id } = pet

  // Helper function to safely format dates

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={pet?.image}
                className='mx-auto object-cover rounded h-10 w-15'
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{pet?.name}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={pet?.user?.image}
                className='mx-auto object-cover rounded h-10 w-15'
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {pet?.user?.name}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className=''>
            <p className='text-gray-900 whitespace-no-wrap'>{pet?.category}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className=''>
            <p
              className={`text-gray-900 whitespace-no-wrap py-1 px-3 rounded-full font-bold ${
                pet?.status === 'requested'
                  ? 'bg-yellow-200'
                  : 'bg-green-700 text-white'
              }`}
            >
              {pet?.status}
            </p>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => handleCancel(pet._id)}
          disabled={pet?.status === 'verified'}
          className='disabled:cursor-not-allowed disabled:text-gray-500 relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Cancel</span>
        </button>
      </td>
    </tr>
  )
}

export default MyAdoptionsRows
