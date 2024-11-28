import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./pages/Blog.jsx";
import ClubShop from "./pages/ClubShop.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Memberships from "./pages/Memberships.jsx";
import History from "./pages/History.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/club-shop",
        element: <ClubShop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/memberships",
        element: <Memberships />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/History",
        element: <History />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appLayout} />
  </StrictMode>
);
