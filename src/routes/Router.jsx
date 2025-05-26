import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import Home from "../component/Home";

function Layout() {
  return (
    <>
    {/* <Login/> */}
    
      {/* <Nav /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
   
    path: "/",
    element: <Layout />,
    children: [
    //   { path: "/", element: <Home /> },
    { path: "/", element: <Login /> },
      { path: "SignUp", element: <SignUp /> },
      { path: "Home", element: <Home /> }
    //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;