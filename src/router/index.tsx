import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const MainLayout = lazy(() => import('@/layouts/MainLayout'))
const ManageLayout = lazy(() => import('@/layouts/ManageLayout'))
const QuestionLayout = lazy(() => import('@/layouts/QuestionLayout'))
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))
const NotFound = lazy(() => import('@/pages/404'))
const List = lazy(() => import('@/pages/Manage/List'))
const Trash = lazy(() => import('@/pages/Manage/Trash'))
const Star = lazy(() => import('@/pages/Manage/Star'))
const Edit = lazy(() => import('@/pages/Question/Edit'))
const Stat = lazy(() => import('@/pages/Question/Statistics'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'star',
            element: <Star />
          },
          {
            path: 'trash',
            element: <Trash />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat />
      }
    ]
  }
])

export default router

export const HOME_PATH = '/'
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const MANAGE_INDEX_PATH = '/manage/list'
