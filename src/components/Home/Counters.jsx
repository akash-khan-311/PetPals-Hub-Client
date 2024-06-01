import Container from '../../shared/Container'
import Counter from './Counter'
import counterImg1 from '../../assets/images/counter1.png'
import counterImg2 from '../../assets/images/counter2.png'
import counterImg3 from '../../assets/images/counter3.png'

const Counters = () => {
  return (
    <section className='counter-bg my-10'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 py-12'>
          <Counter text={'Award'} img={counterImg1} value={585} />
          <Counter text={'Pets'} img={counterImg2} value={20} />
          <Counter text={'Staffs'} img={counterImg3} value={100} />
        </div>
      </Container>
    </section>
  )
}
export default Counters
