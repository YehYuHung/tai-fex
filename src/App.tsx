import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ButtonListPage from "./pages/ButtonListPage";
import RoundedPage from "./pages/RoundedPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/detail",
          element: <DetailsPage />,
        },
        {
          path: "/button",
          element: <ButtonListPage />,
        },
        {
          path: "rounded",
          element: <RoundedPage />,
        },
      ],
    },
  ],
  {
    basename: "/tai-fex/", // Set basename here
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
