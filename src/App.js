
import './App.css';

 import Hero from "./Componant/Hero/Hero"
import {Main} from "./Componant/Main/Main"
import {ContactUs} from "./Componant/ContactUs/ContactUs"
import{Notfound} from "./Componant/Notfound/Notfound"
import {Layout} from './Componant/Layout/Layout';
import {RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom';
import Skills from './Componant/Skils/Skills';
import Resume from './Componant/Resume/Resume';
import ProjectDetails from './Componant/ProjectDetails/ProjectDetails';



function App() {

  let routers = createBrowserRouter([
    {path : "/" , element : <Layout/> , children:[
      {path : "Myy-Portfolio" , element :<Hero/>},
      {path : "contactus" , element :<ContactUs/>},
      {path : "main" , element :<Main/>},
      {path : "skills" , element :<Skills/>},
      {path : "*" , element :<Notfound/>},
      {path : "hero" , element :<Hero/>},
      {path : "projectDetails/:id" , element :<ProjectDetails/>},
      {path : "resume" , element :<Resume/>},
      { path: '/', element: <Navigate to="/Myy-Portfolio" /> }, 
    ]}
  ])

  return <div>

  <div className="container container-color">
  <RouterProvider router={routers}>
  </RouterProvider>
  </div>


  
  
  </div>
}
 
export default App;
