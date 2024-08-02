import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";

const routuer = createBrowserRouter([
  {
    path: "reactport",
    element: <Layout />,
    children: [
      // { path: "", element: <Home /> },
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routuer} />;
}

export default App;
