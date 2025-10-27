import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../Pages/Landing";
import Test from "../Pages/Test";
import Share from "../Pages/Share";
import Receive from "../Pages/Receive";
import Faq from "../Pages/Faq";

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
    },
    {
      path: "/faq",
      element: <Faq/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Approute;
