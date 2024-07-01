import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Tracker1 from "../pages/tracker1/Tracker1.jsx";
import Tracker2 from "../pages/tracker2/Tracker2.jsx";
import Tracker3 from "../pages/tracker3/Tracker3.jsx";
import Tracker4 from "../pages/tracker4/Tracker4.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "trackers/",
    element: <Layout />,
    children: [
      {
        path: "1",
        element: <Tracker1 />,
      },
      {
        path: "2",
        element: <Tracker2 />,
      },
      {
        path: "3",
        element: <Tracker3 />,
      },
      {
        path: "4",
        element: <Tracker4 />,
      },
    ],
  },
]);
