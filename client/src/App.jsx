import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import Header from './components/Header'
import FooterCom from './components/Footer'
import PrivateRoute from './components/PrivateRoute';
import CreatePost from './pages/CreatePost'
import { Link } from 'react-router-dom';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
export default function App() {
  return (
    <BrowserRouter className="text-3xl font-bold underline">
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
        </Route>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}