/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PetCard from "../../components/PetListing/PetCard";
import { getAllPets } from "../../api/pet";
import Loader from "../../Loader/Loader";
import Category from "../../components/Home/Category";
import { categories } from "../../components/Categories/CategoriesData";
import CategoryBox from "../../components/Categories/CategoryBox";
import Container from "../../shared/Container";
import { IoMdDoneAll } from "react-icons/io";
import HelmetCom from "../../components/Helmet/Helmet";

const PetListing = () => {
  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPets = selectedCategory
    ? pets.filter((pet) => pet.category === selectedCategory)
    : pets;

  const handleSelectCategory = (category) => {
    if (selectedCategory === "All") {
      setPets(pets);
    }
    setSelectedCategory(category);
  };

  useEffect(() => {
    setLoading(true);
    getAllPets().then((data) => {
      if (selectedCategory) {
        setPets(data);
      }
      setPets(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
    <HelmetCom title={"Pet Listing"} />
      <Container>
        <div className="pt-4 flex  items-center justify-between overflow-x-auto">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2  flex flex-col-reverse items-center text-sm font-medium border-b-2 text-neutral-500 hover:text-neutral-800 transition cursor-pointer ${
              selectedCategory === ""
                ? "text-neutral-800 border-neutral-800 border-b-2"
                : "border-transparent text-neutral-500"
            }`}
          >
            All
            <IoMdDoneAll size={26} />
          </button>
          {categories?.map((item) => (
            <CategoryBox
              handleSelectCategory={() => handleSelectCategory(item.label)}
              key={item.label}
              icon={item.icon}
              label={item.label}
              selected={
                selectedCategory.toLowerCase() === item.label.toLowerCase()
              }
            />
          ))}
        </div>
      </Container>
      <div className="mx-auto max-w-screen-xl px-5 md:px-2 lg:px-0">
        {filteredPets.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 py-8">
            {filteredPets?.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="min-h-[50vh] flex flex-col justify-center items-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center w-full  flex justify-center items-center">
              😢 Not Pet In this Category
            </h1>
            <span className="text-sm md:text-xl lg:text-2xl text-center my-2">
              Select Another Category 😊
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default PetListing;
