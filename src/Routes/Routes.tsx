import { Navigate } from "react-router-dom";
import PortalLayout from "../App/Layouts/Portal";
import MainLayout from "../App/Layouts/Main";

import LoginView from "../App/Pages/Login";
import ExplorerView from "../App/Pages/Explorer";
import RecordDetailView from "../App/Pages/Detail";
import RecordAddView from "../App/Pages/Add";
import NotFoundView from "../App/Pages/NotFound";
import LandingView from "../App/Pages/Landing";

const AppRoutes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/portal" />,
    children: [
      { path: "login", element: <LoginView /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <NotFoundView /> },
      { path: "redirect" },
    ],
  },
  {
    path: "app",
    element: isLoggedIn ? <PortalLayout /> : <Navigate to="/login" />,
    children: [
      { path: "explorer", element: <ExplorerView /> },
      { path: "record/:id", element: <RecordDetailView /> },
      { path: "record/add", element: <RecordAddView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/app/404" /> },
    ],
  },
  {
    path: "portal",
    element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    children: [{ path: "/", element: <LandingView /> }],
  },
];

export default AppRoutes;
