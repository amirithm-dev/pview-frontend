import {BrowserRouter ,Route,Routes} from 'react-router'
import Home from './pages/home'
import Dashboard from './pages/dashboard/dashboard'
import Error from './pages/error'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/dashboard' Component={Dashboard} />
          
          <Route path='*' element={<Error code={430} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
