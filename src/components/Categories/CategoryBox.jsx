import { useNavigate } from 'react-router-dom'

const CategoryBox = ({ label, icon: Icon, selected, handleSelectCategory }) => {
  return (
    <div
      onClick={handleSelectCategory}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 text-neutral-500 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? 'text-neutral-800 border-neutral-800 border-b-2'
          : 'border-transparent text-neutral-500'
      }`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}
export default CategoryBox
