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

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout/>,
        loader: () => fetch("http://localhost:4980/trendingCampaigns"),
      },
      {
        path: "/addCampaign",
        element: <CampaignLayout/>
      },
      {
        path: "/campaignDetails/:id",
        element: <CampaignDetails/>,
        
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={routers} />
    </Theme>
  </StrictMode>
);
