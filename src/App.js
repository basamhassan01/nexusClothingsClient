import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Threshold from "./components/Threshold/Threshold";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Threshold />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/products/:id",
        element:<Products />,
      },
      {
        path:"/product/:id",
        element:<Product />,
      },
      {
        path:"/about",
        element:<Home />,
      },
      {
        path:"/contact",
        element:<Home />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;