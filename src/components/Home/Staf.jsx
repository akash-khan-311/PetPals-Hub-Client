import { useEffect, useState } from "react";
import TopHeading from "../../shared/TopHeading";
import Container from "../../shared/Container";
import StafCard from "../Card/StafCard";

const Staf = () => {
  const [stafs, setStafs] = useState([]);
  useEffect(() => {
    fetch("./staff.json")
      .then((res) => res.json())
      .then((data) => setStafs(data));
  }, []);
  return (
    <section className="py-6 md:py-10">
      <Container>
        <div className="text-center">
          <TopHeading text={"our staff"} />
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold ">
            Team of Professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
          {stafs.map((staf) => (
            <StafCard key={staf.id} staf={staf} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Staf;
