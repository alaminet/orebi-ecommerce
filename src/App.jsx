import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductInside from "./pages/ProductInside";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/product" element={<ProductInside/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/404" element={<NotFound/>}></Route>
        </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
