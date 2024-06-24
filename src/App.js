
import './App.css';

// import {Header} from "./Componant/Header/Header"
import {Hero} from "./Componant/Hero/Hero"
import {Main} from "./Componant/Main/Main"
import {ContactUs} from "./Componant/ContactUs/ContactUs"
// import {Footer} from "./Componant/Footer/Footer"
import  {Notfound} from "./Componant/Notfound/Notfound"
import {Layout} from './Componant/Layout/Layout';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Skills from './Componant/Skils/Skills';
import Resume from './Componant/Resume/Resume';
import ProjectDetails from './Componant/ProjectDetails/ProjectDetails';



function App() {

  let routers = createBrowserRouter([
    {path : "/" , element : <Layout/> , children:[
      {path : "Mina-Portfolio" , element :<Hero/>},
      {path : "contactus" , element :<ContactUs/>},
      {path : "main" , element :<Main/>},
      {path : "skills" , element :<Skills/>},
      {path : "*" , element :<Notfound/>},
      {path : "hero" , element :<Hero/>},
      {path : "projectDetails/:id" , element :<ProjectDetails/>},
      {path : "resume" , element :<Resume/>},
    ]}
  ])

  return <>

  <div className="container container-color">
  <RouterProvider router={routers}>
  </RouterProvider>
  </div>


  
  
  </>
}
  {/* <Header/>
  <Hero/>
  <Main/>
  <ContactUs/>
  <Footer/> */}
export default App;
