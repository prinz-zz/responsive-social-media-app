import './style.scss';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import LeftBar from './components/Leftbar/LeftBar';
import Rightbar from './components/Rightbar/Rightbar';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from 'react-query'


function App() {

  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient()


  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login'/>
    }
    return children;
  }

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar /> 
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
        </div>
        </QueryClientProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (<ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>),        
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
