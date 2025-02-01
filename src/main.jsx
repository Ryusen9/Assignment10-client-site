import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import CampaignLayout from "./Layouts/CampaignLayout.jsx";
import HomeLayout from "./Layouts/Homelayout.jsx";
import CampaignDetails from "./Components/CampaignDetails.jsx";
import Context from "./Context/Context.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import AllCampaign from "./Components/AllCampaign.jsx";
import MyCampaign from "./Components/MyCampaign.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        loader: () => fetch("http://localhost:4980/trendingCampaigns"),
      },
      {
        path: "/register",
        element: <Signup/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/addCampaign",
        element: <CampaignLayout />,
      },
      {
        path: "/campaignDetails/:id",
        element: <CampaignDetails />,
      },
      {
        path: "/allCampaigns",
        element: <AllCampaign/>,
        loader: () => fetch("http://localhost:4980/campaigns")
      },
      {
        path: "/myCampaign",
        element: <MyCampaign/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <Theme>
        <RouterProvider router={routers} />
      </Theme>
    </Context>
  </StrictMode>
);
