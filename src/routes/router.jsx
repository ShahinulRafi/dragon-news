import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <div>Auth Page</div>,
  },
  {
    path: "/news",
    element: <div>News Page</div>,
  },
  {
    path: "/*",
    element: <div>Error Page</div>,
  }
]);

export default router;