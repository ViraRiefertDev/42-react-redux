import { BrowserRouter, Route, Routes } from "react-router-dom"

//lessons
import Lesson16 from "./lessons/Lesson16/Lesson16"
import Layout from "./pages/UsersApp/Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Users from "./pages/UsersApp/Users/Users"

//homeworks

//consultations
/* import Consultation08 from "./consultation/Consultation08/Consultation08" */

const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16/> */}
      {/* UserApp - Practice - Lesson16 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Users" element={<Users />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
