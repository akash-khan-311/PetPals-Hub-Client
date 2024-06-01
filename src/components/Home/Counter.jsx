import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
const Counter = ({ value, img, text }) => {
  const count = useMotionValue(0)
  const ruondedValue = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, value, { duration: 5 })
    return animation.stop
  }, [])
  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-3 border w-full py-10 bg-white my-3 hover:border hover:border-yellow-700  transition-all duration-500'>
        <img src={img} alt='' />
        <motion.span className='text-4xl md:text-5xl lg:text-6xl font-bold'>
          {ruondedValue}
        </motion.span>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{text}</h2>
      </div>
    </>
  )
}
export default Counter
