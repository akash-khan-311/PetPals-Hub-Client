import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/root'
import DonationCampaign from '../pages/DonatioCampaign/DonationCampaign'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PetListing from '../pages/PetListing/PetListing'
import PetDetails from '../pages/PetDetails/PetDetails'
import PrivateRoute from './PrivateRoutes'
import { getSinglePet } from '../api/pet'
import DashboardLayout from '../Layout/DashboardLayout'
import MyAdoption from '../pages/Dashboard/User/MyAdoption'
import ManageAdopted from '../pages/Dashboard/Adopter/ManageAdopted'
import AddPet from '../pages/Dashboard/Adopter/AddPet'
import MyAddedPets from '../pages/Dashboard/Adopter/MyAddedPets'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Statistics from '../pages/Dashboard/Common/Statistics'
import Profile from '../pages/Dashboard/Common/Profile'
import AdopterRoutes from './AdopterRoutes'
import AdminRoutes from './AdminRoutes'
import ResetPassword from '../pages/Login/ForgotPassword'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/petlisting', element: <PetListing /> },
      { path: '/donationcampaign', element: <DonationCampaign /> },
      {
        path: '/pet/:id',
        element: (
          <PrivateRoute>
            <PetDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSinglePet(params.id)
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/resetpassword', element: <ResetPassword /> }
    ]
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        )
      },
      {
        path: 'add-pet',
        element: (
          <PrivateRoute>
            <AdopterRoutes>
              <AddPet />
            </AdopterRoutes>
          </PrivateRoute>
        )
      },
      {
        path: 'my-adoption',
        element: (
          <PrivateRoute>
            <MyAdoption />
          </PrivateRoute>
        )
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },
      {
        path: 'my-added-pets',
        element: (
          <PrivateRoute>
            <AdopterRoutes>
              <MyAddedPets />
            </AdopterRoutes>
          </PrivateRoute>
        )
      },

      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ManageUsers />
            </AdminRoutes>
          </PrivateRoute>
        )
      },
      {
        path: 'manage-adopted',
        element: (
          <PrivateRoute>
            <AdopterRoutes>
              <ManageAdopted />
            </AdopterRoutes>
          </PrivateRoute>
        )
      }
    ]
  }
])
export default Router
