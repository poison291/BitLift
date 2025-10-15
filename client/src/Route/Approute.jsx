import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../Pages/Landing";
import Test from "../Pages/Test";
import Share from "../Pages/Share";
import Receive from "../Pages/Receive";

const Approute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/test",
      element: <Test />,
    },

    {
      path: "/share",
      element: <Share />,
    },
    {
      path: "/share/:roomId",
      element: <Receive/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Approute;
