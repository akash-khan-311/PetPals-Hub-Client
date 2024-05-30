/* eslint-disable react/no-unescaped-entities */

import Container from "../../shared/Container";
import ProgressBar from "../../shared/ProgressBar";
import TopHeading from "../../shared/TopHeading";
import AboutImg from "../../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <section className=" py-12">
      <Container>
        <div className="flex md:flex-row flex-col justify-center items-center">
          {/* About Content */}
          <div className="space-y-3 md:w-1/2 flex-1">
            <TopHeading text={"About us"} />
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold ">
              What Makes Us Care About Pets?
            </h2>
            <p className="text-gray-500">
              If it wasn’t for our founder’s childhood spent on a ranch in
              northern Texas, surrounded by domestic animals and pets all the
              time till she went to college – there might have been no Anilove
              animal shelter now. So as soon as she graduated with her
              Veterinary degree 12 years ago, she already knew what she will be
              doing for a living.
            </p>
            <div>
              <ProgressBar label={"Animal Care"} progress={90} />
              <ProgressBar label={"Pet Boarding"} progress={80} />
              <ProgressBar label={"Lost and Found Pet"} progress={60} />
            </div>
          </div>
          {/* About image */}
          <div className="md:w-1/2 flex-1">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
