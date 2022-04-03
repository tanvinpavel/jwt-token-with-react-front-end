import { Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Body from "./component/Body/Body";
import Layout from "./component/Layout/Layout";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import Order from "./component/Order/Order";
import PersistenceLogin from "./component/PersistenceLogin/PersistenceLogin";
import Product from "./component/Product/Product";
import LoggedInChecker from "./utility/LoggedInChecker";
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Body/>}/>

        <Route path="/login" element={<Login/>} />

        <Route element={<PersistenceLogin/>}>
          <Route element={<PrivateRoute/>}>
            <Route path='/order' element={<Order/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/about' element={<About/>} />
          </Route>
        </Route>

        {/* not found page */}
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App;