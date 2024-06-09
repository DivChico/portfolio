import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
// layouts
// pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      //   {
      //     path: "categories",
      //     element: <Categories />,
      //   },
      //   {
      //     path: "products/:prefix",
      //     element: <Products />,
      //     loader: ({ params }) => {
      //       if (
      //         typeof params.prefix !== "string" ||
      //         !/^[a-z]+$/i.test(params.prefix)
      //       ) {
      //         throw new Response("Bad Request", {
      //           statusText: "Category not found",
      //           status: 400,
      //         });
      //       }
      //       return true;
      //     },
      //   },
      //   {
      //     path: "about-us",
      //     element: <AboutUs />,
      //   },
      //   {
      //     path: "login",
      //     element: <Login />,
      //   },
      //   {
      //     path: "register",
      //     element: <Register />,
      //   },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
