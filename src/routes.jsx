import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Item from "./pages/Item";
import Category from "./pages/Category";
import Search from "./pages/Search";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemList from "./pages/ItemList";
import RecipeList from "./pages/RecipeList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "item",
        element: <ItemList />,
      },
      {
        path: "recipes",
        element: <RecipeList />,
      },

      {
        path: "item/:id",
        element: <Item />,
      },
      {
        path: "category/:category",
        element: <Category />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
