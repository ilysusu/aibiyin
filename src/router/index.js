import { lazy } from "react"
import { Navigate } from "react-router-dom"

// 路由懒加载
const Home = lazy(() => import('@/views/Home'))
const Detail = lazy(() => import('@/views/Detail'))
const Entire = lazy(() => import('@/views/Entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'detail',
    element: <Detail />
  },
  {
    path: 'entire',
    element: <Entire />
  },
]

export default routes