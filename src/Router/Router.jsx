import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddJob from "../Pages/AddJob/AddJob";
import Home from "../Pages/Home/Home";
import JobApply from "../Pages/JobApply/JobApply";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Login from "../Pages/Login/Login";
import MyApplications from "../Pages/MyApplications/MyApplications";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import Register from "../Pages/Register/Register";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
import PrivateRoute from "./PrivateRoute";


  const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <h2>Route is not Found.</h2>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://job-portal-server-woad.vercel.app/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        },
        {
          path:'/myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'/addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path:'/viewApplications/:job_id',
          element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({params})=> fetch(`https://job-portal-server-woad.vercel.app/job_application/jobs/${params.job_id}`)
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);
   export default Router