import Container from '../../shared/Container'
import sponsorImg1 from '../../assets/images/sponsors01.png'
import sponsorImg2 from '../../assets/images/sponsors02.png'
import sponsorImg3 from '../../assets/images/sponsors03.png'
import sponsorImg4 from '../../assets/images/sponsors04.png'
import sponsorImg5 from '../../assets/images/sponsors05.png'
import sponsorImg6 from '../../assets/images/sponsors06.png'

const Sponsor = () => {
  return (
    <section className='sponsor py-10'>
      <Container>
        <div className='flex flex-wrap xl:flex-nowrap  justify-center items-center gap-10'>
          <img src={sponsorImg1} alt='sponsor' />
          <img src={sponsorImg2} alt='sponsor' />
          <img src={sponsorImg3} alt='sponsor' />

          <img src={sponsorImg1} alt='sponsor' />
          <img src={sponsorImg2} alt='sponsor' />
          <img src={sponsorImg3} alt='sponsor' />
        </div>
      </Container>
    </section>
  )
}
export default Sponsor
