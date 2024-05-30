import { ImSpinner11 } from "react-icons/im";
import { categories } from "../Categories/CategoriesData";

const AddPetForm = ({
  handleSubmit,
  handleImageChange,
  loading = false,
  uploadButtonText,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="name"
                id="name"
                type="text"
                placeholder="Enter Pet Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="category"
              >
                {categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="number" className="block text-gray-600">
                  Your Phone Number
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="phone"
                  id="phone"
                  type="number"
                  placeholder="Enter Your Phone Number"
                />
              </div>

              <div className="space-y-1 text-sm flex-1">
                <label htmlFor="gender" className="block text-gray-600">
                  Gender
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                  name="gender"
                  id="gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="location"
                id="location"
                type="text"
                placeholder="Enter Pickup Location"
                required
              />
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => handleImageChange(e.target.files[0])}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      placeholder="Upload image"
                      hidden
                    />

                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  (Optional) Donation
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="donation"
                  id="donation"
                  type="number"
                  placeholder="Donation Amount"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="age" className="block text-gray-600">
                  Pet Age
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="age"
                  id="age"
                  type="number"
                  placeholder="Enter The Age Of Pet"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>

          <textarea
            id="description"
            className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
            name="description"
            placeholder="Enter About Your Pet"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <ImSpinner11 className="m-auto animate-spin" size={24} />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
