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
import MensCricket from "./pages/MensCricket.jsx";
import JuniorCricket from "./pages/JuniorCricket.jsx";
import WomensCricket from "./pages/WomensCricket.jsx";
import AllStarsCricket from "./pages/AllStarsCricket.jsx";
import ClubWelfare from "./pages/ClubWelfare.jsx";
import DynamosCricket from "./pages/DynamosCricket.jsx";
import DocumentsPolicies from "./pages/DocumentsPolicies.jsx";

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
      {
        path: "/MensCricket/:id",
        element: <MensCricket />,
      },
      {
        path: "/junior-cricket",
        element: <JuniorCricket />,
      },
      {
        path: "/womens-cricket",
        element: <WomensCricket />,
      },
      {
        path: "/junior-info",
        element: <JuniorCricket />,
      },
      {
        path: "/all-stars-cricket",
        element: <AllStarsCricket />,
      },
      {
        path: "/dynamos-cricket",
        element: <DynamosCricket />,
      },
      {
        path: "/club-welfare",
        element: <ClubWelfare />,
      },
      {
        path:"/documents-policies",
        element:<DocumentsPolicies/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appLayout} />
  </StrictMode>
);
