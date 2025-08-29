import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main className='h-screen w-full'>
      <Toaster />
      <NavBar/>
      <Outlet/>
    </main>
  )
}

export default App