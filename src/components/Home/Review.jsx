// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// React Icons
import { BiSolidQuoteAltRight } from 'react-icons/bi'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
import Container from '../../shared/Container'
import TopHeading from '../../shared/TopHeading'
const Review = () => {
  const [reveiws, setReveiws] = useState([])

  useEffect(() => {
    fetch('/review.json')
      .then(res => res.json())
      .then(data => setReveiws(data))
  }, [])
  return (
    <>
      <Container>
        <section>
          <div>
            {/* Top Heading */}
            <div className='flex flex-col justify-center w-full text-center '>
              <TopHeading text={'ABOUT ADOPTED PETS'} />
              <h2 className='lg:text-6xl md:text-5xl text-4xl font-bold '>
                Success Stories
              </h2>
            </div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 50
                }
              }}
              spaceBetween={30}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper'
            >
              <div className='container mx-auto px-5 lg:px-0'>
                {reveiws.map(review => (
                  <SwiperSlide key={review.id} className='my-20'>
                    <div className='flex flex-col justify-center w-full text-center '>
                      <img
                        className='rounded-full mx-auto object-cover mb-5'
                        width={80}
                        height={80}
                        src={review.image}
                        alt=''
                      />
                      <div className='max-w-[700px] mx-auto space-y-5'>
                        <p>{review.review}</p>
                        <p className='text-4xl flex justify-center font-bold mx-auto'>
                          <BiSolidQuoteAltRight />
                        </p>
                        <h3 className='text-2xl text-yellow-700 font-bold'>
                          {review.name}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </section>
      </Container>
    </>
  )
}
export default Review
