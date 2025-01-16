import { BrowserRouter, Route, Routes } from "react-router-dom"

/* import Layout from "./pages/UsersApp/Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Users from "./pages/UsersApp/Users/Users"
 */
import Layout from "./pages/CustomerApp/Layout/Layout"
import Home from "./pages/CustomerApp/Home/Home"
import CustomerProfile from "./pages/CustomerApp/CustomerProfile/CustomerProfile"

//lessons
/* import Lesson16 from "./lessons/Lesson16/Lesson16" */
/* import Lesson17 from "./lessons/Lesson17/Lesson17" */
import Lesson18 from "./lessons/Lesson18/Lesson18"

//homeworks
/* import Homework16 from "./homeworks/Homework16/Homework16" */

//consultations
/* import Consultation08 from "./consultation/Consultation08/Consultation08" */

const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16/> */}
      {/* UserApp - Practice - Lesson16 */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Users" element={<Users />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout> */}
      {/* <Homework16/> */}
      {/* Consult9 */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<CustomerProfile/>}/>
        </Routes>
      </Layout> */}
      {/* <Lesson17/> */}
      <Lesson18/>
    </BrowserRouter>
  )
}
export default App
