import axiosSecure from '.'
// Save user in database
export const saveUser = async user => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    role: 'user',
    status: 'Verified'
  }
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
  return data
}

// Get Token From server
export const getToken = async email => {
  const { data } = await axiosSecure.post(`/jwt`, { email })
  console.log('Token received from server------>', data)
  return data
}

// Remove Token From Browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get('/logout')
  return data
}

// Get user role
export const getRole = async email => {
  const { data } = await axiosSecure.get(`/user/${email}`)
  return data.role
}

// Get All Users
export const getAllUsers = async () => {
  const { data } = await axiosSecure('/users')
  return data
}

// Update User Role
export const updateRole = async (email, role) => {
  const currentUser = {
    email,
    role,
    status: 'Verified'
  }
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)

  return data
}

// Get All Donation For users
export const getAllDonation = async email => {
  const { data } = await axiosSecure(`/donations/${email}`)
  return data
}

// Become A Adopter
export const becomeAdopter = async email => {
  const currentUser = {
    email,
    status: 'Requested'
  }

  const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
  return data
}
