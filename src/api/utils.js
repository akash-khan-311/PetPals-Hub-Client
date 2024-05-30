import axios from 'axios'
import axiosSecure from '.'

export const imageUpload = async image => {
  const imageFormData = new FormData()
  imageFormData.append('image', image)

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API_KEY}`,
    imageFormData
  )

  return data
}

export const getAdminStat = async () => {
  const { data } = await axiosSecure(`/admin-stat`)
  return data
}
