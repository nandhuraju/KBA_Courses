

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Form } from "react-router-dom"
import CourseButton from './components/CourseButton'
import CourseCards from './components/CourseCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Homepage from "./pages/Homepage"
import MainLayout from "./layouts/MainLayout"
import Courses from "./pages/Courses"
import NotFoundPage from "./pages/NotFoundPage"
import Formcontact from "./components/Formcontact"
import Contactus from "./pages/Contactus"
import Addcourse from "./pages/Addcourse"
import CoursePage, { courseLoader } from "./pages/CoursePage"
import EditCoursePage from "./pages/EditCoursePage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout/>}>
        
      <Route path="/" element={<Homepage/>}/>
      <Route path="/courses" element={<Courses/>}/>

      <Route path="/notfoundpage" element={<NotFoundPage/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/addcourse" element={<Addcourse/>}/>
      <Route path="/edit-course/:id" element={<EditCoursePage/>} loader={courseLoader}/>
      <Route path="/courses/:id" element={<CoursePage/>} loader={courseLoader}/>
      </Route>
      </>
        
        )
        )
        return (
        <>
          {/* <Navbar />
      <Hero />
      <CourseCards />
      <CourseButton /> */}

          < RouterProvider router={router} />
        </>
        )
}

        export default App
