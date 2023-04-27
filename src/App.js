import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import NavBar from './Pages/NavBar.js';
import Pricing from './Pages/Pricing.js';
import Login from './Pages/Login';
import Register from './Pages/Register';

const router = createBrowserRouter ([
{
  element: <NavBar />,
  children: [
    {
      path: '/',
      element: <Home /> 
    },
    {
      path: '/about',
      element: <About /> 
    },
    {
      path: '/pricing',
      element: <Pricing /> 
    },
    {
      path: '/login',
      element: <Login /> 
    },
    {
      path: '/register',
      element: <Register /> 
    },
  ]
}
]);

function App() {
  return (
    
    <RouterProvider router= { router }/>

  );
}

export default App;


// npm i mdb-react-ui-kit react-router-dom@6 react-bootstrap bootst