
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rootlayout from './Rootlayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Technologies from './Component/Technologises';
function App() {
  let router=createBrowserRouter([
  {
    path:'/',
    element:<Rootlayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'technologies',
        element:<Technologies/>
      }
    ]
  },
 
])
  return (
      <div>
        <RouterProvider router={router}/>

       
      </div>
  );
}

export default App;
