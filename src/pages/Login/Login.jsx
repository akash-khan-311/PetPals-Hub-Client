import { Link, useLocation, useNavigate } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { ImSpinner11 } from 'react-icons/im'
import toast from 'react-hot-toast'
import { getToken, saveUser } from '../../api/auth'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const { loading, SignIn, setLoading, SignInWithGoogle } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  // See Password and hide
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    try {
      const result = await SignIn(email, password)

      // Get token
      await getToken(result?.user?.email)

      navigate(from, { replace: true })
      toast.success('Login Successfully')
    } catch (error) {
      if (error.message.includes('auth/invalid-credential', 0)) {
        toast.error('Invalid User Name Or Password')
      }
    } finally {
      setLoading(false)
    }
  }
  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      const result = await SignInWithGoogle()

      // Save user data to the database
      await saveUser(result?.user)

      // Get token
      await getToken(result?.user?.email)
      navigate(from, { replace: true })
      toast.success('Login Successfully')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-yellow-900 text-white'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-100'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-black'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='*******'
                  className=' w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-black'
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className='cursor-pointer absolute right-6 top-5  -translate-y-1/2'
                >
                  {showPassword ? <FaEye color='black' /> : <FaEyeSlash color='black' />}
                </span>
              </div>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-yellow-800 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <ImSpinner11 className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-yellow-700 font-bold text-gray-100'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
