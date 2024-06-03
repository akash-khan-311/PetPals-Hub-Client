import axiosSecure from '.'

// Save Adopt info in database
export const savePetAdoptInfo = async adoptInfo => {
  const { data } = await axiosSecure.post('/adoption', adoptInfo)
  return data
}
// Get All pets form database
export const getAllPets = async (page) => {
  const { data } = await axiosSecure(`/pets?page=${page}&limit=4`)
  return data
}

// Get All Pets For Adopter
export const getAdopterPets = async email => {
  const { data } = await axiosSecure(`/pets/${email}`)
  return data
}

// Get All Adoption for a user by email
export const getUserAdoptions = async email => {
  const { data } = await axiosSecure(`/adoptions?email=${email}`)
  return data
}

// Get All Adopted Pets For Adopter by email
export const getAdoptedPets = async email => {
  const { data } = await axiosSecure(`/adopted/pets/${email}`)
  return data
}
// Get single pet from database
export const getSinglePet = async id => {
  const { data } = await axiosSecure(`/pet/${id}`)
  return data
}

// save pet data in database
export const savePet = async petData => {
  const { data } = await axiosSecure.post('/pets', petData)
  return data
}

// Delete Added Pets From Database
export const deletePets = async id => {
  const { data } = await axiosSecure.delete(`/pets/${id}`)
  return data
}

// Status Change of Pets
export const petUpdateStatus = async id => {
  const { data } = await axiosSecure.put(`/pets/update/${id}`)
  return data
}

// cancel adopted pets request
export const cancelAdoption = async id => {
  const { data } = await axiosSecure.delete(`/pet/cancel/${id}`)
  return data
}
