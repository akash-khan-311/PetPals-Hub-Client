import HelmetCom from '../../components/Helmet/Helmet'
import AboutUs from '../../components/Home/AboutUs'
import Banner from '../../components/Home/Banner'
import CallToAction from '../../components/Home/CallToAction'
import Category from '../../components/Home/Category'
import GetInTouch from '../../components/Home/GetInTouch'
import Review from '../../components/Home/Review'
import Sponsor from '../../components/Home/Sponsor'
import Staf from '../../components/Home/Staf'
import Video from '../../components/Home/Video/Video'

const Home = () => {
  return (
    <div>
      <HelmetCom title={'Home'} />
      <Banner />
      {/* <Category /> */}
      <AboutUs />
      <CallToAction />
      <Sponsor />
      <Staf />

      <Review />
      <GetInTouch/>
    </div>
  )
}

export default Home
