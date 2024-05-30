import React from "react";

import Container from "../../shared/Container";
import Button from "../../shared/Button/Button";

const CallToAction = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log({ email });
  };
  return (
    <div className="calltoAction md:py-20 py-12 ">
      <Container>
        <div className="flex">
          <div className="md:w-3/5"></div>
          <div className="md:w-2/3 w-3/4 mx-auto space-y-5">
            <h5 className="uppercase md:text-2xl text-white font-semibold">
              join the newsletter
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Stay Up To Date With All The Latest News!
            </h1>
            <form className="space-y-5" onSubmit={handleSubscribe}>
              <input
                name="email"
                required
                className="focus:outline-none md:py-3 px-6 py-2 md:w-3/4 w-full "
                placeholder="Enter Your Email Adress"
                type="email"
              />
              <Button label={"join now"} type={"submit"} />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
