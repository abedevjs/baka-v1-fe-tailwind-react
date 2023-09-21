import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ListBagasi from "./pages/bagasi/ListBagasi";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import User from "./pages/User";
import JualBagasi from "./pages/bagasi/CreateBagasi";
import UpdateBagasi from "./pages/bagasi/UpdateBagasi";
import ListOrder from "./pages/order/ListOrder";
import CreateOrder from "./pages/order/CreateOrder";
import UpdateOrder from "./pages/order/UpdateOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="list-bagasi" element={<ListBagasi />} />
            <Route path="create-bagasi" element={<JualBagasi />} />
            <Route path="update-bagasi/:id" element={<UpdateBagasi />} />
            <Route path="order" element={<ListOrder />} />
            <Route path="create-order/:id" element={<CreateOrder />} />
            <Route path="update-order/:id" element={<UpdateOrder />} />
            <Route path="user" element={<User />} />
            <Route path="about" element={<About />} />
            <Route path="rules" element={<Rules />} />
            <Route path="faq" element={<Faq />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
