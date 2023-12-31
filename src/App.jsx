import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
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
