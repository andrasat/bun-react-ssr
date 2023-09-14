import type { RouteObject } from 'react-router-dom'
import About from '@pages/about'
import Home from '@pages/index'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
]

export default routes
