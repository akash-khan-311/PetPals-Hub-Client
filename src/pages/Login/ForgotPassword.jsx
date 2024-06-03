import { useState } from 'react'
import Loader from '../../Loader/Loader'
import useAuth from '../../hooks/useAuth'
import Container from '../../shared/Container'

const ResetPassword = () => {
  const { loading, resetPassword } = useAuth()
  const [email, setEmail] = useState(null)
  // Handler Reset Password

  const handleResetPassword = async () => {
    try {
      const result = await resetPassword(email)
      console.log(result)
    } catch (error) {
      console.log(error)
    }

    // const result = resetPassword(email)
    // console.log(result)
  }

  if (loading) return <Loader />
  return (
    <section>
      <Container>
        <div className='flex justify-center items-center'>
          <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center '>
              Enter Your Email For Reset Password ! 🙂
            </h1>

            <div className='flex justify-center items-center my-16'>
              <input
                onChange={e => setEmail(e.target.value)}
                className='focus:outline-none py-2 px-3 border border-yellow-500 md:rounded-l-md w-full md:w-1/2 flex justify-center items-center'
                placeholder='Enter Your Email'
                type='email'
                name='email'
                id='email'
              />
              <button
                onClick={handleResetPassword}
                className='bg-yellow-500 text-white py-[9px] px-3 rounded-r-md w-2/5 md:w-1/5 '
                type='submit'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default ResetPassword
