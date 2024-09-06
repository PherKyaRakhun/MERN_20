import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import FindUS from "./pages/findus";
import Products from "./pages/Products";
import Mainlayout from "./layout/Mainlayout";
import Pages from "./pages/pages";
import About from "./pages/about";
import CartItem from "./components/Cart";
import ProductDetails from "./pages/ProductDetails";
import License from "./pages/License";
import Error from "./pages/Error";
import Password from "./pages/Password";
import Changelog from "./pages/Changelog";
import Contactus from "./pages/Contactus";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Mainlayout>
              <Home />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="products"
          element={
            <Mainlayout>
              <Products CartItem={CartItem} />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="/product-details/:productID?"
          element={<ProductDetails />}
        ></Route>

        <Route
          path="about"
          element={
            <Mainlayout>
              <About />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="findus"
          element={
            <Mainlayout>
              <Contactus />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="pages"
          element={
            <Mainlayout>
              <Pages />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="license"
          element={
            <Mainlayout>
              <License />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="error"
          element={
            <Mainlayout>
              <Error />
            </Mainlayout>
          }
        ></Route>

        <Route path="password" element={<Password />}></Route>

        <Route
          path="changelog"
          element={
            <Mainlayout>
              <Changelog />
            </Mainlayout>
          }
        ></Route>

        <Route
          path="about"
          element={
            <Mainlayout>
              <About />
            </Mainlayout>
          }
        ></Route>
      </Routes>
    </div>
  );
};
export default App;
