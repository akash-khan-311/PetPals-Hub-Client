import Container from "../../shared/Container";

const Banner = () => {
  return (
    <div className="banner  ">
      <Container>
        <div className="">
          <div className=" py-24 md:py-18 xl:min-h-[100vh] text-white flex items-center justify-end ">
            <div className="w-1/2 "></div>
            <div className="sm:w-1/2 space-y-1">
              <span
                data-aos="fade-top"
                data-aos-offset="0"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                className="text-2xl uppercase"
              >
                Animal need
              </span>
              <h2
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="text-5xl md:text-7xl lg:text-8xl font-bold"
              >
                Your Help!
              </h2>
              <p
                data-aos="fade-bottom"
                data-aos-offset="0"
                data-aos-delay="1500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                className="border-l-2 px-6 md:text-xl"
              >
                Millions of loving pets wait for a home. Open your heart and
                theirs. Adopt a pet today and experience the joy of
                unconditional love and companionship. Visit Pet Pals Hub to find
                your perfect furry friend!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
