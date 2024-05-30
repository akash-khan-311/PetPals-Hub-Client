import { useEffect, useState } from 'react'
// Components

// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'

import MenuItem from './MenuItem'
import useAuth from '../../../hooks/useAuth'

import ToggleButton from '../../../shared/Button/ToggleButton'
import UserMenu from './Menu/UserMenu'
import AdopterMenu from './Menu/AdopterMenu'
import { getRole } from '../../../api/auth'
import Logo from '../../../shared/Logo'
import useRole from '../../../hooks/useRole'
import AdminMenu from './Menu/AdminMenu'
import { BsGraphUp } from 'react-icons/bs'

const Sidebar = () => {
  const { user, loading, logOut } = useAuth()

  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
  const [role] = useRole()

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
    console.log(toggle)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-yellow-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-6 shadow-lg rounded-lg justify-center items-center bg-yellow-700 mx-auto'>
              <Logo />
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6 '>
            {/* If a user is host */}
            {role === 'adopter' && (
              <ToggleButton toggle={toggle} toggleHandler={toggleHandler} />
            )}
            <nav>
              <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />
              {role === 'user' && <UserMenu />}
              {role === 'adopter' ? (
                toggle ? (
                  <AdopterMenu />
                ) : (
                  <UserMenu />
                )
              ) : (
                ''
              )}
              {role === 'admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          />
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5  hover:bg-yellow-700   hover:text-white transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
