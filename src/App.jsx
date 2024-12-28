import { Outlet, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import AuthenLayoutRoute from './routers/authenLayoutRoute'
import AdminLayoutRoute from './routers/adminLayoutRoute'
import RouteApp from './routers'
function App() {


  return (
    <div>

      {/* MainLayout chứa các route con */}
      <Outlet/>
    </div>
  )
}

export default App
