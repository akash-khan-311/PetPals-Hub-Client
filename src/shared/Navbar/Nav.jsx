import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Collapse, IconButton, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Container from '../Container'
import useAuth from '../../hooks/useAuth'
import MenuDropdown from './MenuDropdown'
import './Nav.css'

export function NavList () {
  const { user } = useAuth()
  return (
    <>
      <ul className='my-2 hidden md:flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
        <Typography
          as='li'
          variant='small'
          color='black'
          className='p-1 font-medium'
        >
          <NavLink
            to={'/'}
            className='flex items-center hover font-semibold transition-colors text-sm'
          >
            Home
          </NavLink>
        </Typography>
        <Typography
          as='li'
          variant='small'
          color='black'
          className='p-1 font-medium'
        >
          <NavLink
            to={'/petlisting'}
            className='flex items-center hover font-semibold transition-colors text-sm'
          >
            Pet Listing
          </NavLink>
        </Typography>
        <Typography
          as='li'
          variant='small'
          color='black'
          className='p-1 font-medium'
        >
          <NavLink
            to={'/donationcampaign'}
            className='flex items-center hover font-semibold transition-colors text-sm'
          >
            Donation Campaign
          </NavLink>
        </Typography>

        {user ? (
          <MenuDropdown />
        ) : (
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-medium'
          >
            <NavLink
              to={'/login'}
              className='flex items-center text-black hover font-semibold transition-colors text-sm'
            >
              Login
            </NavLink>
          </Typography>
        )}
      </ul>
    </>
  )
}

export function NavbarSimple () {
  const [openNav, setOpenNav] = useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Container>
      <nav className='py-3 '>
        <div className='flex items-center justify-between text-gray-300 uppercase'>
          <Typography className='mr-4 cursor-pointer py-1.5'>
            <NavLink to={'/'}>
              <img width={200} src={logo} alt='logo' />
            </NavLink>
          </Typography>
          <div className='hidden lg:block'>
            <NavList />
          </div>
          <div className='lg:hidden flex'>
            <MenuDropdown />
          </div>
        </div>
      </nav>
    </Container>
  )
}
