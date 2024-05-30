import { useState } from "react";
import AddPetForm from "../../../components/Form/AddPetForm";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../../api/utils";
import { savePet } from "../../../api/pet";
import toast from "react-hot-toast";

const AddPet = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const location = form.location.value;
    const age = form.age.value;
    const phone = form.phone.value;
    const image = form.image.files[0];
    const gender = form.gender.value;
    const donation = form.donation.value;
    const adopter = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    const imageData = await imageUpload(image);
    // const imageUrl = imageData?.data?.display_url;
    const petData = {
      name,
      image: imageData.data.display_url,
      age,
      location,
      description,
      category,
      phone,
      donation,
      gender,
      adopter,
    };

    try {
      const data = await savePet(petData);
      setUploadButtonText("Uploaded! 😊");
      if (data.insertedId) {
        form.reset();
        toast.success("Pet Added Successfully 😍");
        navigate("/dashboard/my-added-pets");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <>
      <AddPetForm
        handleSubmit={handleSubmitForm}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      />
    </>
  );
};
export default AddPet;
