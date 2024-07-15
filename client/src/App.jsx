import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'


export default function App() {
  return (
    <BrowserRouter className="text-3xl font-bold underline">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}