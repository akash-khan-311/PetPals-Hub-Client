const TableRow = ({ pet }) => {
  console.log(pet)

  
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
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={pet?.user?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
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
        <p className='text-gray-900 whitespace-no-wrap'>
          ${pet?.user?.donation ? pet?.user?.donation : 0}
        </p>
      </td>
      <td className='px-5 flex py-5 border-b border-gray-200  text-sm'>
        <p
          className={`${
            pet?.status === 'requested' ? 'bg-yellow-200 ' : 'bg-green-200'
          } px-8 py-1 uppercase font-semibold whitespace-no-wrap`}
        >
          {pet?.status}
        </p>
      </td>
    </tr>
  )
}

export default TableRow
