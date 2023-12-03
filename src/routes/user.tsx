import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
//
import AuthLayout from "../layouts/AuthLayout";
import Loadable from "../components/Loadable";
import routeNames from "./routeNames";
// 
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const Landing = Loadable(lazy(() => import('../pages/Landing')));

const UserRoutes = () => {
  return useRoutes([{
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: routeNames.landing, element: <Landing /> },
      // 
      { path: routeNames.notFound, element: <Page404 /> },
      { path: '/', element: <Navigate to={routeNames.landing} /> },
      { path: '*', element: <Navigate to={routeNames.landing} /> },
    ]
  }]);
};

export default UserRoutes;