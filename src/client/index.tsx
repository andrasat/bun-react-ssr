/// <reference lib="dom" />
import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '@utils/routes'

const router = createBrowserRouter(routes)

const App = () => {
  return <RouterProvider router={router} />
}

const root = hydrateRoot(document.getElementById('root')!, <App />)
export default root
