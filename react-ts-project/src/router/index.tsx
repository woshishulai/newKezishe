import { lazy } from "react";
import { RouteObject } from 'react-router-dom'
const Index = lazy(() => import('@/pages/home/Home'))
const Login = lazy(() => import('@/pages/Login'))
const ResetPassword = lazy(() => import('@/pages/ResetPassword'))
const Register = lazy(() => import('@/pages/Register'))


const Router: RouteObject[] = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
]

export default Router;



